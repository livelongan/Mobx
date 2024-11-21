import { Box, styled } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren, ReactNode } from 'react'
import { GAP } from '../../constants'

type IProps<T> = PropsWithChildren<
    React.FormHTMLAttributes<T> & {
        autoComplete?: string
        noValidate?: boolean
        actions?: ReactNode
    }
>
const FormWrapper = styled(Box)(
    () => `
    display: flex;
    gap: ${GAP.large}px;
    margin-bottom: ${GAP.normal}px;
`,
)
export const Form = observer<IProps<object>>(({ children, actions, ...others }) => {
    return (
        <form noValidate autoComplete="off" {...others}>
            <FormWrapper>{children}</FormWrapper>
            {actions}
        </form>
    )
})
