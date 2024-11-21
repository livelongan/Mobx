import { FormControl, FormControlProps, FormHelperText, InputLabel, OutlinedInput, OutlinedInputProps, styled } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useCallback, useId, useMemo } from 'react'
import { FieldValues, RegisterOptions, UseFormReturn } from 'react-hook-form'
import { FIELD_MIN_WIDTH, GAP } from '../../../constants'

const Error = styled(FormHelperText)(
    () => `
    height: 1.5em;
    margin-left: ${GAP.normal}px;
`,
)

export type FormInputProps = React.FormHTMLAttributes<FieldValues> & {
    field: string
    label?: string
    options?: RegisterOptions<object, never>
    control?: FormControlProps

    form: UseFormReturn<any, any, undefined>
} & OutlinedInputProps

export const FormInput = observer<FormInputProps>(({ form, field, label, options = {}, control = {}, ...others }) => {
    const uniqueId = useId()
    const { formState, setValue } = form
    const register = form.register(field as never, { ...options })
    const { errors = {} } = formState ?? {}

    const validate = errors[field]

    const error = useMemo((): string => {
        if (!validate) {
            return ''
        }
        if (validate.message) {
            return `${validate.message}`
        } else {
            let message = ''
            switch (validate.type) {
                case 'required':
                    message = 'This field is required'
                    break
                case 'maxLength':
                    message = `The maximum length cannot exceed ${options.maxLength}`
                    break
                case 'minLength':
                    message = `The minimum length cannot exceed ${options.minLength}`
                    break
                case 'min':
                    message = `The maximum value cannot exceed ${options.max}`
                    break
                case 'max':
                    message = `The minimum value cannot exceed ${options.min}`
                    break
                case 'pattern':
                    message = 'Rule validation failed'
                    break
            }
            return message
        }
    }, [options, validate])

    const hintText = useMemo((): string => {
        if (others.disabled) {
            return 'Disabled'
        }
        return others.readOnly ? 'Read Only' : ''
    }, [others.disabled, others.readOnly])

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            register.onChange(event)
            setValue(field, event.target.value)
        },
        [register, setValue, field],
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
