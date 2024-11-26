import { FormElement } from '@progress/kendo-react-form'
import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { GridLayout, GridLayoutProps } from '@progress/kendo-react-layout'

const Root = styled(FormElement)(() => ``)
const Layout = styled(GridLayout)(() => ``)

export const FormLayout = ({
    children,
    className,
    ...others
}: PropsWithChildren<GridLayoutProps>) => {
    const cls = `form-layout ${className ?? ''}`.trim()
    return (
        <Root>
            <Layout {...others} className={cls}>
                {children}
            </Layout>
        </Root>
    )
}
