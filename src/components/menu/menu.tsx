import { observer } from 'mobx-react-lite'
import { Box, styled } from '@mui/material'
import { MENU_ICON_WIDTH, MENU_WIDTH } from '../../constants'
import { MenuTree } from './menu-tree'
import { useMemo } from 'react'
import { useStores } from '../../stores'

const SliderWrapper = styled(Box)(
    ({ theme }) => `
    width: ${MENU_ICON_WIDTH}px;
    overflow: hidden;
    position: relative;
    box-shadow: 1px 1px 0 0 ${theme.palette.divider};
    color: ${theme.palette.secondary.main};
    background-color: ${theme.palette.background.default};
    transition: width ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut} 0ms;
    &.collapsed {
        width: ${MENU_WIDTH}px;
    }
`,
)
export const MenuRouter = observer(() => {
    const { baseStore } = useStores()
    const collapsed = useMemo(() => baseStore.collapse, [baseStore.collapse])
    return (
        <SliderWrapper className={collapsed ? 'collapsed' : ''}>
            <MenuTree />
        </SliderWrapper>
    )
})
