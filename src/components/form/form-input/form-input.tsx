import { FormControl, FormControlProps, FormHelperText, InputLabel, OutlinedInput, OutlinedInputProps, styled } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useCallback, useId, useMemo } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { FIELD_MIN_WIDTH, GAP } from '../../../constants'
import { FieldOptions, FormOptions } from '../type'
import { getErrorMessage, getHintText } from '../tools'

const Error = styled(FormHelperText)(
    () => `
    height: 1.5em;
    margin-left: ${GAP.normal}px;
`,
)

export type FormInputProps = React.FormHTMLAttributes<FieldValues> & {
    field: string
    label?: string
    options?: FieldOptions
    control?: FormControlProps

    form: UseFormReturn<any, any, undefined>
} & OutlinedInputProps

export const FormInput = observer<FormInputProps>(({ form, field, label, options = {}, control = {}, ...others }) => {
    const uniqueId = useId()
    const { formState } = form
    const register = form.register(field as never, { ...options } as FormOptions)
    const { errors = {} } = formState ?? {}

    const validate = errors[field]

    const error = useMemo((): string => {
        return getErrorMessage(validate, options)
    }, [options, validate])

    const hintText = useMemo((): string => {
        return getHintText({ disabled: others.disabled, readOnly: others.readOnly })
    }, [others.disabled, others.readOnly])

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            register.onChange(event)
            form.setValue(field, event.target.value, {
                shouldValidate: true,
            })
        },
        [register, form, field],
    )

    return (
        <FormControl {...control} error={!!validate} required={!!options?.required} sx={{ minWidth: FIELD_MIN_WIDTH }}>
            <InputLabel htmlFor={uniqueId} required={!!options?.required}>
                {label ?? ''}
            </InputLabel>
            <OutlinedInput {...others} id={uniqueId} inputProps={{ ...register }} onChange={handleChange} />
            <Error>{error ? error : hintText}</Error>
        </FormControl>
    )
})
