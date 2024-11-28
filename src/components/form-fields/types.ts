import { FieldProps, FieldRenderProps } from '@progress/kendo-react-form'

export type FormMode = 'filter' | 'view' | 'add' | 'edit'

export type BaseFieldProps = Partial<FieldProps> & {
    page?: string
    mode?: FormMode
    name: string
    label: string
    readonly?: boolean
    required?: boolean
    disabled?: boolean
}
export type BaseRenderProps = Partial<FieldRenderProps>
