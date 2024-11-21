import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { FieldOptions, FormOptions } from './type'
import { VALIDATION } from '../../constants'

export const getErrorMessage = (
    validate: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
    options: FormOptions | FieldOptions,
    ignorePattern = false,
): string => {
    if (!validate || (ignorePattern && validate.type === 'pattern')) {
        return ''
    }
    if (validate.message) {
        return `${validate.message}`
    } else {
        let message = ''
        switch (validate.type) {
            case 'required':
                message = VALIDATION.required
                break
            case 'maxLength':
                message = `${VALIDATION.maxLength} ${options.maxLength}`
                break
            case 'minLength':
                message = `${VALIDATION.minLength} ${options.minLength}`
                break
            case 'max':
                message = `${VALIDATION.max} ${options.max}`
                break
            case 'min':
                message = `${VALIDATION.min} ${options.min}`
                break
            case 'pattern':
                message = VALIDATION.pattern
                break
        }
        return message
    }
}

export const getHintText = ({ disabled = false, readOnly = false }): string => {
    if (disabled) {
        return VALIDATION.disabled
    }
    return readOnly ? VALIDATION.readonly : ''
}
