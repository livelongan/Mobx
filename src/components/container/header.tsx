import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { GAP, MENU_ICON_HEIGHT, MENU_MIN_WIDTH, MENU_WIDTH } from '../../constants'
import { useStores } from '../../stores'
import { HeaderIcon } from './header-icon'
import { menuIcon } from '@progress/kendo-svg-icons'
import { ThemeSwitch } from './theme-switch'
import { styled } from 'styled-components'

const Root = styled(AppBar)`
    padding: 0;
    padding-right: ${GAP.large}px;
`

type IProps = PropsWithChildren<object>

export const Header = observer<IProps>(() => {
    const { baseStore } = useStores()

    const handleCollapseMenu = () => {
        const collapse = !baseStore.collapse
        baseStore.setCollapse(collapse)
        if (collapse) {
            baseStore.setMenuWidth(MENU_WIDTH)
        } else {
            baseStore.setMenuWidth(MENU_MIN_WIDTH)
        }
    }
    return (
        <Root positionMode={'static'} style={{ height: MENU_ICON_HEIGHT }}>
            <AppBarSection>
                <HeaderIcon
                    svgIcon={menuIcon}
                    width={MENU_MIN_WIDTH}
                    height={MENU_ICON_HEIGHT}
                    onClick={handleCollapseMenu}
                />
            </AppBarSection>

            <AppBarSpacer style={{ flex: 1 }} />

            <AppBarSection>
                <ThemeSwitch />
            </AppBarSection>
        </Root>
    )
})
