import { FieldProps, FieldRenderProps } from '@progress/kendo-react-form'

export type BaseFieldProps = Partial<FieldProps> & {
    name: string
    label: string
    readonly?: boolean
    required?: boolean
    disabled?: boolean
}
export type BaseRenderProps = Partial<FieldRenderProps> & {
    base: BaseFieldProps
}
