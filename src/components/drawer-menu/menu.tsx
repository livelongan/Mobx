import { observer } from 'mobx-react-lite'
import { Drawer, DrawerContent } from '@progress/kendo-react-layout'

import { PropsWithChildren, useEffect, useRef } from 'react'
import { useRoutes } from '../../routers'
import { useStores } from '../../stores'
import { GAP, MENU_MIN_WIDTH } from '../../constants'
import { styled } from 'styled-components'
import { useDraggable, NormalizedDragEvent } from '@progress/kendo-react-common'
import { ThemeSettings } from '../../theme'
import { MenuItem } from './menu-item'

const HANDLER_WIDTH = 4
const Root = styled(Drawer)`
    flex: 1;
    min-height: 0;
    min-width: 0;
    & .k-drawer-item {
        white-space: pre;
    }
    &.dragging .k-drawer {
        transition: unset !important;
    }
    &.dragging .k-drawer-wrapper {
        transition: unset !important;
    }
    &.collapsed .k-drawer-item {
        user-select: none !important;
    }
`

const Handler = styled('div')`
    position: absolute;
    height: 100%;
    width: ${HANDLER_WIDTH}px;
    opacity: 1;
    &:hover {
        cursor: e-resize;
        background: var(--kendo-color-base-emphasis);
    }
`

const PageContainer = styled(DrawerContent)`
    position: relative;
    height: 100%;
    flex: 1;
    padding: ${GAP.middle}px ${GAP.large}px 0 ${GAP.middle}px;
    box-sizing: border-box;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
    background-color: var(--kendo-color-app-surface);
`

type IProps = PropsWithChildren<object>

export const MenuRouter = observer<IProps>(({ children }) => {
    const { menus, groupIds } = useRoutes()
    const { baseStore } = useStores()
    const handler = useRef<HTMLDivElement | null>(null)

    useDraggable(handler, {
        onDrag: (event: NormalizedDragEvent) => {
            const width = document.body.clientWidth
            const maxWidth = width - MENU_MIN_WIDTH
            if (event.pageX <= MENU_MIN_WIDTH + 20) {
                baseStore.setCollapse(false)
                baseStore.setMenuWidth(MENU_MIN_WIDTH)
            } else if (event.pageX >= maxWidth) {
                baseStore.setMenuWidth(maxWidth)
                baseStore.setCollapse(true)
            } else {
                baseStore.setMenuWidth(event.pageX)
                baseStore.setCollapse(true)
            }
        },
        onDragStart: () => {
            baseStore.setMenuDragging(true)
        },
        onDragEnd: () => {
            baseStore.setMenuDragging(false)
        },
    })

    useEffect(() => {
        baseStore.setExpandedId(groupIds)
    }, [baseStore, groupIds])

    return (
        <Root
            expanded={baseStore.collapse}
            mode="push"
            mini={true}
            width={baseStore.menuWidth}
            items={menus}
            item={MenuItem}
            miniWidth={MENU_MIN_WIDTH}
            animation={!baseStore.menuDragging ? true : false}
            className={`${baseStore.menuDragging ? 'dragging' : ''} ${!baseStore.collapse ? 'collapsed' : ''}`.trim()}
            style={{
                userSelect: baseStore.menuDragging ? 'none' : 'initial',
            }}
        >
            <Handler
                className="drag-handler"
                ref={handler}
                style={{
                    left: baseStore.menuWidth - HANDLER_WIDTH / 2,
                    zIndex: ThemeSettings.zIndex.modal,
                }}
            />
            <PageContainer>{children}</PageContainer>
        </Root>
    )
})
