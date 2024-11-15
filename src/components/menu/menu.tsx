import { observer } from 'mobx-react-lite'
import { Box, styled } from '@mui/material'
import { MENU_ICON_WIDTH, MENU_WIDTH } from '../../constants'
import { MenuTree } from './menu-tree'
import { useMemo } from 'react'
import { useStores } from '../../stores'

const SliderWrapper = styled(Box)`
    width: ${MENU_ICON_WIDTH}px;
    overflow: hidden;
    position: relative;
    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.12);
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &.collapsed {
        width: ${MENU_WIDTH}px;
    }
`
export const MenuRouter = observer(() => {
    const { baseStore } = useStores()
    const collapsed = useMemo(() => baseStore.collapse, [baseStore.collapse])
    return (
        <SliderWrapper className={collapsed ? 'collapsed' : ''}>
            <MenuTree />
        </SliderWrapper>
    )
})
