import { Form, FormClassComponent, FormProps } from '@progress/kendo-react-form'
import { PropsWithChildren, useId, useMemo, useRef } from 'react'
import { FORM_SUFFIX } from '../../constants'
import { getId } from '../../utils'

type IProps = PropsWithChildren & {
    page?: string
    defaultValue: FormProps['initialValues']
}
type FormWrapperProps = PropsWithChildren & {
    render: FormProps['render']
    onSubmit?: FormProps['onSubmit']
}

export const useForm = ({ page, defaultValue }: IProps) => {
    const id = useId()
    const uniqueId = useMemo(() => (page ? getId(FORM_SUFFIX, page) : id), [id, page])
    const formRef = useRef<FormClassComponent>()

    const FormWrapper = ({ render, onSubmit }: FormWrapperProps) => {
        return (
            <Form
                id={uniqueId}
                ref={formRef}
                onSubmit={(data) => {
                    if (onSubmit) {
                        onSubmit(data)
                    }
                }}
                initialValues={defaultValue}
                render={render}
            />
        )
    }

    return {
        id: uniqueId,
        form: formRef.current,
        FormWrapper,
    }
}
