import { observer } from 'mobx-react-lite'
import { Error } from '@progress/kendo-react-labels'
import { ComboBox, ComboBoxProps } from '@progress/kendo-react-dropdowns'
import { BaseFieldProps, BaseRenderProps } from './types'
import { getId } from '../../utils'
import { Wrapper } from './wrapper'

export type FormDropdownProps = BaseFieldProps & Partial<ComboBoxProps>
export type DropdownRenderProps = BaseRenderProps & Partial<FormDropdownProps>

export const DropdownField = (fieldProps: DropdownRenderProps) => {
    const { page, mode = 'view', validationMessage, visited, ...others } = fieldProps

    return (
        <>
            <ComboBox
                id={getId(`${page}-${mode}-field-${others.name}`)}
                {...others}
                allowCustom={true}
            />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    )
}

export const FormDropdown = observer((props: FormDropdownProps) => {
    const { name, label } = props
    return (
        <Wrapper
            name={name}
            component={(renderProps) => <DropdownField {...props} {...renderProps} />}
            label={label}
        />
    )
})
