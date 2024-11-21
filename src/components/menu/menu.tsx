import { observer } from 'mobx-react-lite'
import { Box, InputBase, Paper, styled } from '@mui/material'
import { ENABLE_SCROLL, MENU_ICON_WIDTH, MENU_WIDTH } from '../../constants'
import { MenuTree } from './menu-tree'
import { useMemo } from 'react'
import { useStores } from '../../stores'
import { Search } from '@mui/icons-material'
import { MenuItemIcon } from './menu-item-icon'

const Root = styled(Paper)(
    ({ theme }) => `
    width: ${MENU_ICON_WIDTH}px;
    overflow: hidden;
    position: relative;
    box-shadow: 1px 1px 0 0 ${theme.palette.divider};
    color: ${theme.palette.secondary.main};
    transition: width ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut} 0ms;
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    z-index: ${theme.zIndex.drawer};
 
    &.collapsed {
        width: ${MENU_WIDTH}px;
        min-height: 0;
    }
    & .search-menu {
        overflow: hidden;
        display: flex;
        position: relative;
        box-shadow: 1px 1px 0 0 ${theme.palette.divider};
        z-index: ${theme.zIndex.drawer};
        transition: height ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut} 0ms;
        &.hidden {
            height: 0;
         }
    }
`,
)

const Wrapper = styled(Box)(
    () => `
    flex: 1; 
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    overflow-y: overlay;
`,
)
export const MenuRouter = observer(() => {
    const { baseStore } = useStores()
    const collapsed = useMemo(() => baseStore.collapse, [baseStore.collapse])
    return (
        <Root className={collapsed ? 'collapsed' : ''}>
            <Paper className={`search-menu ${collapsed ? '' : 'hidden'}`}>
                <MenuItemIcon height={36}>
                    <Search />
                </MenuItemIcon>
                <InputBase sx={{ flex: 1, pr: 1 }} placeholder="Filter menu" />
            </Paper>
            <Wrapper className={ENABLE_SCROLL}>
                <MenuTree />
            </Wrapper>
        </Root>
    )
})
