import { FieldWrapper, FieldWrapperProps, Field, FieldProps } from '@progress/kendo-react-form'
import { styled } from 'styled-components'
import { FIELD_MIN_WIDTH } from '../../constants'

const Root = styled(FieldWrapper)`
    min-width: ${FIELD_MIN_WIDTH}px;
`

export const Wrapper = ({
    wrapperProps,
    ...others
}: FieldProps & { wrapperProps?: FieldWrapperProps }) => {
    const { required, label } = others
    return (
        <Root {...wrapperProps}>
            <div className={`k-form-label ${required ? 'k-form-required' : ''}`.trim()}>
                {label}
            </div>
            <Field {...others} />
        </Root>
    )
}
