import { FormElement } from '@progress/kendo-react-form'
import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { StackLayoutProps } from '@progress/kendo-react-layout'
import { FIELD_LAYOUT_FLAG, FORM_LAYOUT_FLAG } from '../../constants'

const Root = styled(FormElement)`
    height: 100%;
`

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    min-width: 0;

    .${FIELD_LAYOUT_FLAG}:first-child {
        overflow: hidden;
        overflow-y: overlay;
    }

    .k-form-field {
        margin-top: 0;
    }
`

export const FormLayout = ({
    children,
    className,
    ...others
}: PropsWithChildren<StackLayoutProps>) => {
    const cls = `${FORM_LAYOUT_FLAG} ${className ?? ''}`.trim()
    return (
        <Root>
            <Layout {...others} className={cls}>
                {children}
            </Layout>
        </Root>
    )
}
