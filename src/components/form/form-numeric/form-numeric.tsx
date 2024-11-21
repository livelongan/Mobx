import { Box, Button, FormControl, FormControlProps, FormHelperText, InputLabel, OutlinedInput, OutlinedInputProps, styled } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useCallback, useId, useMemo } from 'react'
import { FieldValues, RegisterOptions, UseFormReturn } from 'react-hook-form'
import { FIELD_MIN_WIDTH, GAP } from '../../../constants'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'

const ARROW_WIDTH = 34
const Error = styled(FormHelperText)(
    () => `
    height: 1.5em;
    margin-left: ${GAP.normal}px;
`,
)

const Arrow = styled(Box)(
    ({ theme }) => `
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 0;
    height: 100%;
    overflow: hidden; 
    background-color: ${theme.palette.background.paper};
`,
)
const ArrowButton = styled(Button)(
    ({ theme }) => `    
    padding: 0;
    margin: 0;
    width: ${ARROW_WIDTH}px;
    min-width:  ${ARROW_WIDTH}px;
    flex: 1;
    box-sizing: border-box;
    transform: unset;
    overflow: hidden;
    min-height: auto;
    color: ${theme.palette.text.primary};
    & .plus {
        margin-top: 3px;
    }
    & .minus {
        margin-top: -3px;
    }
`,
)

export type FormNumericProps = React.FormHTMLAttributes<FieldValues> & {
    field: string
    label?: string
    options?: RegisterOptions<object, never>
    control?: FormControlProps
    decimal?: number

    form: UseFormReturn<any, any, undefined>
} & Omit<OutlinedInputProps, 'endAdornment' | 'type'>

export const FormNumeric = observer<FormNumericProps>(({ form, field, label, decimal, options = {}, control = {}, ...others }) => {
    console.log(decimal)
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
            <OutlinedInput
                {...others}
                id={uniqueId}
                inputProps={{ ...register, sx: { width: 'calc(100% - 22px)' } }}
                sx={{ paddingRight: 0 }}
                endAdornment={
                    <Arrow>
                        <ArrowButton>
                            <ArrowDropUp className="plus" />
                        </ArrowButton>
                        <ArrowButton>
                            <ArrowDropDown className="minus" />
                        </ArrowButton>
                    </Arrow>
                }
                onChange={handleChange}
            />
            <Error>{error ? error : hintText}</Error>
        </FormControl>
    )
})
