import { observer } from 'mobx-react-lite'
import { Error } from '@progress/kendo-react-labels'
import { Checkbox, CheckboxProps } from '@progress/kendo-react-inputs'
import { BaseFieldProps, BaseRenderProps } from './types'
import { getId } from '../../utils'
import { Wrapper } from './wrapper'

export type FormCheckboxProps = BaseFieldProps & Partial<CheckboxProps>
export type CheckboxRenderProps = BaseRenderProps & Partial<FormCheckboxProps>

export const TextAreaField = (fieldProps: CheckboxRenderProps) => {
    const { page, mode = 'view', validationMessage, visited, ...others } = fieldProps

    return (
        <>
            <Checkbox id={getId(`${page}-${mode}-field-${others.name}`)} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    )
}

export const FormCheckbox = observer((props: FormCheckboxProps) => {
    const { name, label } = props
    return (
        <Wrapper
            name={name}
            component={(renderProps) => <TextAreaField {...props} {...renderProps} />}
            label={label}
        />
    )
})
