import { DrawerItem, DrawerItemProps } from '@progress/kendo-react-layout'
import { SvgIcon } from '@progress/kendo-react-common'
import { chevronDownIcon, chevronUpIcon, fileTxtIcon, folderIcon } from '@progress/kendo-svg-icons'
import { styled } from 'styled-components'
import { MenuItemProps } from './types'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../stores'
import { ThemeSettings } from '../../theme'
import { MENU_ITEM_HEIGHT } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { useCallback, useMemo } from 'react'
import { Chip } from '@progress/kendo-react-buttons'

const PADDING = 16

const TextRoot = styled.div`
    display: flex;
    flex: 1;
`
const GroupMenu = styled.ul`
    width: 100%;
    height: 0;
    transition: height ${ThemeSettings.transitions.duration.shorter}
        ${ThemeSettings.transitions.easing.easeInOut};
    overflow: hidden;
`
const MenuDrawerItem = styled(DrawerItem)`
    height: ${MENU_ITEM_HEIGHT}px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    padding-left: ${PADDING}px;
    padding-right: ${PADDING}px;
`

export const SubMenuItem = observer((props: DrawerItemProps) => {
    const menuItem = props as MenuItemProps
    const navigate = useNavigate()
    const { baseStore } = useStores()
    const { text, path, items = [], expanded, component, parentId, ...others } = menuItem

    const isGroup = useMemo(() => items.length > 0, [items.length])

    const handleSelect = (data: MenuItemProps) => {
        const { path } = data ?? {}

        if (path && !isGroup) {
            navigate(path)
        } else if (isGroup) {
            baseStore.toggleExpandedId(props.id)
        }
    }

    return (
        <MenuDrawerItem
            {...others}
            title={text}
            onSelect={() => {
                handleSelect(props as MenuItemProps)
            }}
        >
            <SvgIcon icon={isGroup ? folderIcon : fileTxtIcon} />
            <TextRoot>{text}</TextRoot>
            {isGroup && (
                <Chip
                    size={'small'}
                    themeColor={'warning'}
                    fillMode={expanded ? 'outline' : 'solid'}
                    rounded={'full'}
                >
                    {items.length}
                </Chip>
            )}
            {isGroup && <SvgIcon icon={!expanded ? chevronDownIcon : chevronUpIcon} />}
        </MenuDrawerItem>
    )
})

export const MenuItem = observer((props: DrawerItemProps) => {
    const menuItem = props as MenuItemProps
    const { baseStore } = useStores()
    const { items = [] } = menuItem
    const expanded = baseStore.expandIds.includes(props.id)

    const getHeight = useCallback(
        (data: MenuItemProps, children: MenuItemProps[] = []) => {
            const { items = [] } = data
            children.push(data)
            if (items.length > 0 && baseStore.expandIds.includes(data.id)) {
                items.forEach((it) => {
                    getHeight(it, children)
                })
            }
            return (children.length - 1) * MENU_ITEM_HEIGHT
        },
        [baseStore.expandIds],
    )

    return items.length === 0 ? (
        <SubMenuItem {...props} />
    ) : (
        <>
            <SubMenuItem {...props} expanded={expanded} />
            <GroupMenu
                className={'k-drawer-items group'}
                style={{
                    height: expanded ? `${getHeight(menuItem)}px` : 0,
                }}
            >
                {items.map((it) => (
                    <MenuItem {...it} key={it.id} />
                ))}
            </GroupMenu>
        </>
    )
})
