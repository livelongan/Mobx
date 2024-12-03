import { KeyValue } from '@progress/kendo-react-form'

export type FormMode = 'filter' | 'view' | 'add' | 'edit'

export type RuleProps = {
    required?: boolean
    pattern?: RegExp
    max?: number | Date
    min?: number | Date
    message?: string
}

export type FormRule = KeyValue<RuleProps>
