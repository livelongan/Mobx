import { TextBoxProps } from '@progress/kendo-react-inputs'
import { FieldProps } from '@progress/kendo-react-form'

import { BaseFieldProps, BaseRenderProps } from './types'
import { styled } from 'styled-components'
export type FormTextProps = BaseFieldProps & Partial<TextBoxProps>
export type TextRenderProps = BaseRenderProps & Partial<FormTextProps>

const Label = styled.div``
export const FieldLabel = (fieldProps: FieldProps) => {
    const { label, required } = fieldProps

    return (
        <Label className={`k-form-label ${required ? 'k-form-required' : ''}`.trim()}>
            {label}
        </Label>
    )
}
