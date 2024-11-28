import { FormElement } from '@progress/kendo-react-form'
import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { StackLayoutProps } from '@progress/kendo-react-layout'

const Root = styled(FormElement)`
    height: 100%;
`

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    min-width: 0;
    & .field-layout:first-child {
        overflow: hidden;
        overflow-y: overlay;
    }
`

export const FormLayout = ({
    children,
    className,
    ...others
}: PropsWithChildren<StackLayoutProps>) => {
    const cls = `form-layout ${className ?? ''}`.trim()
    return (
        <Root>
            <Layout {...others} className={cls}>
                {children}
            </Layout>
        </Root>
    )
}
