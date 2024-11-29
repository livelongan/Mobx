import { observer } from 'mobx-react-lite'
import { Error } from '@progress/kendo-react-labels'
import { TextBox, TextBoxProps } from '@progress/kendo-react-inputs'
import { BaseFieldProps, BaseRenderProps } from './types'
import { getId } from '../../utils'
import { Wrapper } from './wrapper'

export type FormTextProps = BaseFieldProps & Partial<TextBoxProps>
export type TextRenderProps = BaseRenderProps & Partial<FormTextProps>

export const TextField = (fieldProps: TextRenderProps) => {
    const { page, mode = 'view', validationMessage, visited, ...others } = fieldProps

    return (
        <>
            <TextBox id={getId(`${page}-${mode}-field-${others.name}`)} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    )
}
// label={required ? `${others.label} *` : others.label}
// labelClassName={`k-form-label ${required ? 'k-form-required' : ''}`.trim()}
export const FormText = observer((props: FormTextProps) => {
    const { name, label } = props
    return (
        <Wrapper
            name={name}
            component={(renderProps) => <TextField {...props} {...renderProps} />}
            label={label}
        />
    )
})
