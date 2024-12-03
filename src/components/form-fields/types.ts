import { FieldProps, FieldRenderProps } from '@progress/kendo-react-form'
import { RuleProps, FormMode } from '../form'

export type BaseFieldProps = Partial<Omit<FieldProps, 'name'>> & {
    page?: string
    mode?: FormMode
    name: string
    label: string
    readOnly?: boolean
    required?: boolean
    disabled?: boolean
    rule?: RuleProps
    hint?: string
}

export type BaseRenderProps = Partial<FieldRenderProps> & Partial<RuleProps>
