import { FormControl, FormControlProps, FormHelperText, InputLabel, MenuItem, Select, SelectProps, styled, SelectChangeEvent } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useCallback, useId, useMemo, useState } from 'react'
import { FieldValues, RegisterOptions, UseFormReturn } from 'react-hook-form'
import { FIELD_MIN_WIDTH, GAP } from '../../../constants'

const Error = styled(FormHelperText)(
    () => `
    height: 1.5em;
    margin-left: ${GAP.normal}px;
`,
)

export type FormSelectSourceProps = {
    id: string | number
    value: string | number | null | undefined | boolean
}

export type FormSelectProps = React.FormHTMLAttributes<FieldValues> & {
    field: string
    label?: string
    options?: RegisterOptions<object, never>
    controlProps?: FormControlProps
    sources: FormSelectSourceProps[] | string[]
    form: UseFormReturn<any, any, undefined>
} & SelectProps

export const FormSelect = observer<FormSelectProps>(({ form, field, label, sources, options = {}, controlProps = {}, ...others }) => {
    const uniqueId = useId()
    const [selected, setSelected] = useState<string | number>('')
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
            let message = 'Invalid field'
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
        (event: SelectChangeEvent<string | number | readonly string[]>) => {
            setSelected(event.target.value as string)
            register.onChange(event)
            setValue(field, event.target.value)
        },
        [field, register, setValue],
    )

    return (
        <FormControl {...controlProps} error={!!validate} required={!!options?.required} sx={{ minWidth: FIELD_MIN_WIDTH }}>
            <InputLabel id={uniqueId}>{label ?? ''}</InputLabel>
            <Select
                labelId={uniqueId}
                id={`select-${uniqueId}`}
                label={label}
                inputProps={{ ...register, value: selected }}
                {...others}
                value={selected}
                onChange={handleChange}
            >
                {sources.map((it) => {
                    if (typeof it === 'object') {
                        return (
                            <MenuItem value={it.id} key={it.id}>
                                {it.id}
                            </MenuItem>
                        )
                    } else {
                        return (
                            <MenuItem value={it} key={it}>
                                {it}
                            </MenuItem>
                        )
                    }
                })}
            </Select>
            <Error>{error ? error : hintText}</Error>
        </FormControl>
    )
})
