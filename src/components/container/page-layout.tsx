import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { GridLayout } from '@progress/kendo-react-layout'

const Root = styled(GridLayout)(
    () => `
    height: 100%;
    width: 100%; 
`,
)

type IProps = PropsWithChildren<object>
export const PageLayout = observer<IProps>(({ children }) => {
    return <Root className="page-layout">{children}</Root>
})
