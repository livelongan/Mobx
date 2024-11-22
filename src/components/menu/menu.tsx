import { observer } from 'mobx-react-lite'
import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout'
import { useNavigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { useRoutes } from '../../routers'
import { MenuItem } from './menu-item'
import { useStores } from '../../stores'
import { GAP, MENU_WIDTH } from '../../constants'
import { styled } from 'styled-components'

const Root = styled(Drawer)(
    () => `
    flex: 1;
    min-height: 0;
    min-width: 0;
`,
)

const PageContainer = styled(DrawerContent)(
    () => `
    height: 100%;
    flex: 1;
    padding: ${GAP.middle}px ${GAP.large}px;
    box-sizing: border-box;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
 `,
)

type IProps = PropsWithChildren<object>

export const MenuRouter = observer<IProps>(({ children }) => {
    const navigate = useNavigate()
    const { menus } = useRoutes()
    const { baseStore } = useStores()

    const onSelect = (e: DrawerSelectEvent) => {
        navigate(e.itemTarget.props.route)
    }
    return (
        <Root
            expanded={baseStore.collapse}
            mode="push"
            mini={true}
            width={MENU_WIDTH}
            items={menus}
            item={MenuItem}
            onSelect={onSelect}
        >
            <PageContainer>{children}</PageContainer>
        </Root>
    )
})
