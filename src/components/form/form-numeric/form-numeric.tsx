import { Box, Button, FormControl, FormControlProps, FormHelperText, InputLabel, OutlinedInput, OutlinedInputProps, styled } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useCallback, useEffect, useId, useMemo, useState } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { FIELD_MIN_WIDTH, GAP, PATTERN, VALIDATION } from '../../../constants'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { FieldOptions, FormOptions } from '../type'
import { getErrorMessage, getHintText } from '../tools'

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
    options?: FieldOptions
    control?: FormControlProps
    decimal?: number
    step?: number

    form: UseFormReturn<any, any, undefined>
} & Omit<OutlinedInputProps, 'type'>

export const FormNumeric = observer<FormNumericProps>((props) => {
    const uniqueId = useId()
    const reg = !props.decimal ? PATTERN.integer : PATTERN.numeric
    const { form, field, label, decimal = 0, options = {}, control = {}, endAdornment, ...others } = props
    const step = others.step ?? Number(Math.pow(0.1, decimal).toFixed(decimal))

    const { formState } = form
    const change = form.watch(field)
    const [inputValue, setInputValue] = useState<number | string>(formState.defaultValues ? (formState.defaultValues[field] ?? '') : '')
    const register = form.register(
        field as never,
        {
            ...options,
            type: 'number',
            pattern: {
                value: reg,
                message: 'Not a Number',
            },
        } as FormOptions,
    )
    const { errors = {} } = formState ?? {}
    const validate = errors[field]

    const invalid = useCallback(() => {
        return inputValue !== null && `${inputValue}` !== '' && !reg.test(`${inputValue}`)
    }, [inputValue, reg])

    const hasError = () => {
        return invalid() || !!getErrorMessage(validate, options, true)
    }
    const error = useMemo((): string => {
        return getErrorMessage(validate, options, true)
    }, [options, validate])

    const errorText = useMemo((): string => {
        if (invalid()) {
            return VALIDATION.nan
        } else {
            return error
        }
    }, [error, invalid])

    const hintText = useMemo((): string => {
        return getHintText({ disabled: others.disabled, readOnly: others.readOnly })
    }, [others.disabled, others.readOnly])

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const data = event.target.value
            let value: string | number = event.target.value

            if (!isNaN(Number(data))) {
                value = Number(data)
            }

            setInputValue(value)
            form.setValue(field, `${value}` === '' ? null : value, {
                shouldValidate: true,
            })
        },
        [form, field],
    )

    const wheelValue = useCallback(
        (increment = true) => {
            if (!isNaN(Number(inputValue))) {
                const pow = Math.pow(10, decimal)
                const numeric = Number(inputValue) * pow
                const value = ((numeric + (increment ? 1 : -1) * (step * pow)) / pow).toFixed(decimal)
                const result = Number(value)
                setInputValue(result)
                form.setValue(field, result)
                form.setFocus(field)
            }
        },
        [decimal, field, form, inputValue, step],
    )

    const handleWheel: React.WheelEventHandler<HTMLDivElement> = useCallback(
        (event) => {
            event.stopPropagation()
            wheelValue(event.deltaY > 0)
        },
        [wheelValue],
    )

    const handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(() => {
        const data = Number(inputValue)
        if (`${inputValue}`.trim() !== '' && !isNaN(data)) {
            if (data === 0) {
                setInputValue(0)
                form.setValue(field, 0, {
                    shouldValidate: true,
                })
            }
        }
    }, [field, form, inputValue])

    useEffect(() => {
        setInputValue(change)
    }, [change])

    return (
        <FormControl {...control} error={hasError()} required={!!options?.required} sx={{ minWidth: FIELD_MIN_WIDTH }}>
            <InputLabel htmlFor={uniqueId}>{label ?? ''}</InputLabel>
            <OutlinedInput
                {...others}
                id={uniqueId}
                value={inputValue}
                inputProps={{
                    ...register,
                    sx: { width: 'calc(100% - 22px)' },
                }}
                sx={{ paddingRight: 0 }}
                onChange={handleChange}
                onWheel={handleWheel}
                onBlur={handleBlur}
                endAdornment={
                    <>
                        {endAdornment}
                        <Arrow>
                            <ArrowButton
                                onClick={() => {
                                    wheelValue(true)
                                }}
                            >
                                <ArrowDropUp className="plus" />
                            </ArrowButton>
                            <ArrowButton
                                onClick={() => {
                                    wheelValue(false)
                                }}
                            >
                                <ArrowDropDown className="minus" />
                            </ArrowButton>
                        </Arrow>
                    </>
                }
            />
            <Error>{errorText ? errorText : hintText}</Error>
        </FormControl>
    )
})
