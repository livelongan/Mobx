import { observer } from 'mobx-react-lite'
import { Field, FieldWrapper } from '@progress/kendo-react-form'
import { Error } from '@progress/kendo-react-labels'
import { Input, InputProps } from '@progress/kendo-react-inputs'
import { BaseFieldProps, BaseRenderProps } from './types'
import { getId } from '../../utils'

export type FormTextProps = BaseFieldProps & Partial<InputProps>
export type TextRenderProps = BaseRenderProps & Partial<FormTextProps>

export const TextField = (fieldProps: TextRenderProps) => {
    const { page, mode = 'view', validationMessage, visited, required, ...others } = fieldProps

    return (
        <>
            <Input
                id={getId(`${page}-${mode}-field-${others.name}`)}
                {...others}
                label={required ? `${others.label} *` : others.label}
                labelClassName={`k-form-label ${required ? 'k-form-required' : ''}`.trim()}
            />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    )
}

export const FormText = observer((props: FormTextProps) => {
    const { name, label } = props
    return (
        <FieldWrapper>
            <Field
                name={name}
                component={(renderProps) => <TextField {...props} {...renderProps} />}
                label={label}
            />
        </FieldWrapper>
    )
})