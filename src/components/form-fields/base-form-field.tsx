import { FieldWrapper, FieldWrapperProps, Field, FieldProps } from '@progress/kendo-react-form'
import { styled } from 'styled-components'
import { FIELD_MIN_WIDTH } from '../../constants'

const Root = styled(FieldWrapper)`
    min-width: ${FIELD_MIN_WIDTH}px;
`
export type BaseFormFieldProps = FieldProps & {
    wrapperProps?: FieldWrapperProps
}

export const BaseFormField = ({ wrapperProps, ...others }: BaseFormFieldProps) => {
    return (
        <Root {...wrapperProps}>
            <Field {...others} />
        </Root>
    )
}
