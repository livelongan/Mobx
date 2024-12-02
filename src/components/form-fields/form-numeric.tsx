import { observer } from 'mobx-react-lite'
import { Error } from '@progress/kendo-react-labels'
import { NumericTextBox, NumericTextBoxProps } from '@progress/kendo-react-inputs'
import { BaseFieldProps, BaseRenderProps } from './types'
import { getId } from '../../utils'
import { Wrapper } from './wrapper'

export type FormNumericProps = BaseFieldProps &
    Partial<NumericTextBoxProps> & {
        decimal?: number | null
    }
export type NumericRenderProps = BaseRenderProps & Partial<FormNumericProps>

export const NumericField = (fieldProps: NumericRenderProps) => {
    const { page, decimal = 0, mode = 'view', validationMessage, visited, ...others } = fieldProps

    return (
        <>
            <NumericTextBox
                step={Math.pow(0.1, decimal ?? 0)}
                format={decimal === null ? '#' : `{n${decimal}}`}
                id={getId(`${page}-${mode}-field-${others.name}`)}
                {...others}
            />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    )
}

export const FormNumeric = observer((props: FormNumericProps) => {
    const { name, label } = props
    return (
        <Wrapper
            name={name}
            component={(renderProps) => <NumericField {...props} {...renderProps} />}
            label={label}
        />
    )
})
