import { IconButton, IconButtonProps } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { MENU_ICON_WIDTH } from '../../constants'
import styled from '@emotion/styled'

const Root = styled('div')`
    width: ${MENU_ICON_WIDTH}px;
    height: ${50}px;
    display: flex;
    justify-content: center;
    align-items: center;
`

type IProps = PropsWithChildren<IconButtonProps>

export const MenuIconWrap = observer<IProps>(({ children, ...others }) => {
    return (
        <Root>
            <IconButton {...others} size="small" edge="start">
                {children}
            </IconButton>
        </Root>
    )
})
