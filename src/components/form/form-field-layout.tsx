import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { GridLayout, GridLayoutProps } from '@progress/kendo-react-layout'

const Layout = styled(GridLayout)(() => ``)

export const FormFieldLayout = ({
    children,
    className,
    ...others
}: PropsWithChildren<GridLayoutProps>) => {
    const cls = `form-field-layout ${className ?? ''}`.trim()
    return (
        <Layout {...others} className={cls}>
            {children}
        </Layout>
    )
}
