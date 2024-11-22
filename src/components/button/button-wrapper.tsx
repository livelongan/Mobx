import { Box, styled } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { GAP } from '../../constants'

const Root = styled(Box)(
    () => `
    display: flex;
    gap: ${GAP.large}px;
`,
)

export type ButtonGroupProps = PropsWithChildren<object>

export const ButtonWrapper = observer<ButtonGroupProps>(({ children }) => {
    return <Root>{children}</Root>
})
