import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { GAP } from '../../constants'

const Root = styled('div')(
    () => `
    display: flex;
    gap: ${GAP.large}px;
`,
)

export type ButtonGroupProps = PropsWithChildren<object>

export const ButtonWrapper = observer<ButtonGroupProps>(({ children }) => {
    return <Root>{children}</Root>
})
