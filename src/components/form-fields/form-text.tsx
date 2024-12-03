import { TextBox, TextBoxProps } from '@progress/kendo-react-inputs'
import { BaseFieldProps, BaseRenderProps } from './types'
import { memo } from 'react'
import { BaseFormField } from './base-form-field'
import { BaseField, useBaseField } from './base-field'

export type FormTextProps = BaseFieldProps & Partial<TextBoxProps>
export type TextRenderProps = BaseRenderProps & FormTextProps

export const TextField = memo((props: TextRenderProps) => {
    const { page, mode = 'view', label, validationMessage, ...others } = props
    const { error, id } = useBaseField(props)
    return (
        <BaseField {...props}>
            <TextBox title={props.value} rounded={null} id={id} {...others} valid={!error} />
        </BaseField>
    )
})

export const FormText = memo((props: FormTextProps) => {
    const { name, label, rule } = props
    return (
        <BaseFormField
            name={name}
            component={(renderProps) => (
                <TextField
                    required={rule?.required}
                    minLength={rule?.min}
                    {...props}
                    {...renderProps}
                />
            )}
            label={label}
        />
    )
})
