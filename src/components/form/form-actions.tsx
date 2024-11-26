import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'

const Root = styled('div')(() => ``)

export const FormActions = ({ children }: PropsWithChildren) => {
    return <Root className="k-form-buttons">{children}</Root>
}
