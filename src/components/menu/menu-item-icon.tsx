import { IconButton, IconButtonProps } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { MENU_ICON_HEIGHT, MENU_ICON_WIDTH } from '../../constants'
import styled from '@emotion/styled'

const Root = styled('div')`
    width: ${MENU_ICON_WIDTH}px;
    height: ${MENU_ICON_HEIGHT}px;
    display: flex;
    justify-content: center;
    align-items: center;
`

type IProps = PropsWithChildren<IconButtonProps>

export const MenuItemIcon = observer<IProps>(({ children, ...others }) => {
    return (
        <Root>
            <IconButton {...others} size="small" edge="start">
                {children}
            </IconButton>
        </Root>
    )
})