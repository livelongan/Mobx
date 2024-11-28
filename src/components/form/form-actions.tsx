import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { GAP } from '../../constants'

const Root = styled.div`
    padding: ${GAP.middle}px ${GAP.large}px;
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 1px inset var(--kendo-color-border);
`

export const FormActions = ({ children }: PropsWithChildren) => {
    return <Root className="form-actions">{children}</Root>
}
