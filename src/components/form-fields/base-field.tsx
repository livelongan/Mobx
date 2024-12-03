import { BaseRenderProps } from './types'
import { memo, PropsWithChildren } from 'react'
import { FieldError } from './field-error'
import { FieldLabel } from './field-label'
import { Hint } from '@progress/kendo-react-labels'
import { styled } from 'styled-components'
import { getFieldId } from '../form'

type IProps = PropsWithChildren<Omit<BaseRenderProps, 'children'>>

const HintRoot = styled.div`
    overflow: hidden;
    height: 24px;
    padding: 0 2px;
    .k-form-hint,
    .k-form-error {
        margin-top: 2px;
    }
`
const Control = styled.div`
    display: flex;
    flex-direction: column-reverse;
`

const Readonly = styled(Hint)`
    color: var(--kendo-color-warning);
`

export const useBaseField = (props: IProps) => {
    const { page, mode, name, visited, validationMessage } = props
    return {
        id: props.id ?? getFieldId(mode, name, page),
        error: visited ? validationMessage : '',
    }
}

export const BaseField = memo((props: IProps) => {
    const { mode, hint, label, required, disabled, children, readOnly } = props

    const { error, id } = useBaseField(props)

    const readonly = mode === 'view' || readOnly
    return (
        <>
            <Control>
                {children}
                <FieldLabel
                    editorValid={!error}
                    editorId={id}
                    label={label}
                    required={required}
                    editorDisabled={disabled}
                />
            </Control>
            <HintRoot>
                {readonly && <Readonly direction="end">{'Read Only'}</Readonly>}
                {!readonly && <FieldError id={id} text={error} />}
                {!readonly && hint && <Hint direction="end">{hint}</Hint>}
            </HintRoot>
        </>
    )
})
