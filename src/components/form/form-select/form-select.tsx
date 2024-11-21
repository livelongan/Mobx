import { FormControl, FormControlProps, FormHelperText, InputLabel, MenuItem, Select, SelectProps, styled, SelectChangeEvent } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useCallback, useId, useMemo, useState } from 'react'
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

export type FormSelectSourceProps = {
    id: string | number
    value: string | number | null | undefined | boolean
}

export type FormSelectProps = React.FormHTMLAttributes<FieldValues> & {
    field: string
    label?: string
    options?: FieldOptions
    control?: FormControlProps
    sources: FormSelectSourceProps[] | string[]
    form: UseFormReturn<any, any, undefined>
} & SelectProps

export const FormSelect = observer<FormSelectProps>(({ form, field, label, sources, options = {}, control = {}, ...others }) => {
    const uniqueId = useId()
    const [selected, setSelected] = useState<string | number>('')
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
        (event: SelectChangeEvent<string | number | readonly string[]>) => {
            setSelected(event.target.value as string)
            register.onChange(event)
            form.setValue(field, event.target.value, {
                shouldValidate: true,
            })
        },
        [field, register, form],
    )

    return (
        <FormControl {...control} error={!!validate} required={!!options?.required} sx={{ minWidth: FIELD_MIN_WIDTH }}>
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
