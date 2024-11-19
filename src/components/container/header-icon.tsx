import { IconButton, IconButtonProps, styled } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { colors } from '../../theme'

const Root = styled('div')(
    ({ theme }) => ` 
    display: flex;
    justify-content: center;
    align-items: center;
    & .MuiButtonBase-root {
        color: ${colors.header[theme.palette.mode]};
    }
`,
)

type IProps = PropsWithChildren<IconButtonProps> & {
    width?: number
    height?: number
}

export const HeaderIcon = observer<IProps>(({ children, width = 36, height = 36, ...others }) => {
    return (
        <Root
            sx={{
                width,
                height,
            }}
        >
            <IconButton size="small" {...others}>
                {children}
            </IconButton>
        </Root>
    )
})
