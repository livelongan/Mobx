import { observer } from 'mobx-react-lite'
import { Error } from '@progress/kendo-react-labels'
import { MultiColumnComboBox, MultiColumnComboBoxProps } from '@progress/kendo-react-dropdowns'
import { BaseFieldProps, BaseRenderProps } from './types'
import { getId } from '../../utils'
import { BaseFormField } from './base-form-field'

export type FormGridDropdownProps = BaseFieldProps & Partial<MultiColumnComboBoxProps>
export type GridDropdownRenderProps = BaseRenderProps & Partial<FormGridDropdownProps>

export const GridDropdownField = (fieldProps: GridDropdownRenderProps) => {
    const { page, mode = 'view', validationMessage, visited, ...others } = fieldProps

    return (
        <>
            <MultiColumnComboBox
                columns={[]}
                id={getId(`${page}-${mode}-field-${others.name}`)}
                {...others}
            />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    )
}

export const FormGridDropdown = observer((props: FormGridDropdownProps) => {
    const { name, label } = props
    return (
        <BaseFormField
            name={name}
            component={(renderProps) => <GridDropdownField {...props} {...renderProps} />}
            label={label}
        />
    )
})
