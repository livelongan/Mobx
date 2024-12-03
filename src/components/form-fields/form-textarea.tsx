import { observer } from 'mobx-react-lite'
import { Error } from '@progress/kendo-react-labels'
import { TextArea, TextAreaProps } from '@progress/kendo-react-inputs'
import { BaseFieldProps, BaseRenderProps } from './types'
import { getId } from '../../utils'
import { BaseFormField } from './base-form-field'

export type FormTextAreaProps = BaseFieldProps & Partial<TextAreaProps>
export type TextAreaRenderProps = BaseRenderProps & Partial<FormTextAreaProps>

export const TextAreaField = (fieldProps: TextAreaRenderProps) => {
    const { page, mode = 'view', validationMessage, visited, ...others } = fieldProps

    return (
        <>
            <TextArea rows={2} id={getId(`${page}-${mode}-field-${others.name}`)} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    )
}

export const FormTextArea = observer((props: FormTextAreaProps) => {
    const { name, label } = props
    return (
        <BaseFormField
            name={name}
            component={(renderProps) => <TextAreaField {...props} {...renderProps} />}
            label={label}
        />
    )
})
