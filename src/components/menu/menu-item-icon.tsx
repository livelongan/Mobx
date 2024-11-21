import { Box, IconButton, IconButtonProps, styled } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { MENU_ICON_HEIGHT, MENU_ICON_WIDTH } from '../../constants'

const Root = styled(Box)(
    ({ theme }) => ` 
    display: flex;
    justify-content: center;
    align-items: center;
    & .MuiButtonBase-root{
        color:${theme.palette.text.primary}
    }
`,
)

type IProps = PropsWithChildren<IconButtonProps> & {
    width?: number
    height?: number
}

export const MenuItemIcon = observer<IProps>(({ children, width = MENU_ICON_WIDTH, height = MENU_ICON_HEIGHT, ...others }) => {
    return (
        <Root sx={{ width, height }}>
            <IconButton size="small" {...others}>
                {children}
            </IconButton>
        </Root>
    )
})
