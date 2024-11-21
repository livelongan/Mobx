import { RegisterOptions } from 'react-hook-form'

export type FormOptions = RegisterOptions<object, never>

export type FieldOptions = Omit<FormOptions, 'pattern'>
