import { FormProps } from '@progress/kendo-react-form'
import { Button } from '@progress/kendo-react-buttons'
import { FormActions, FormFieldLayout, FormLayout, FormText, useForm } from '../../components'
import { useEffect, useState } from 'react'
type DtoProps = {
    id: string
}
export const FormDemo = () => {
    const [details] = useState<DtoProps>({ id: 'id' })
    const { id, form, FormWrapper } = useForm({ page: 'demo', defaultValue: details })

    const handleSubmit: FormProps['onSubmit'] = (data) => {
        console.log('submit', data as DtoProps)
    }

    useEffect(() => {
        console.log(form)
    }, [form])

    return (
        <FormWrapper
            onSubmit={handleSubmit}
            render={(prop) => {
                return (
                    <FormLayout>
                        <FormFieldLayout>
                            <FormText name={'id'} label={'Label'} required />
                        </FormFieldLayout>

                        <FormActions>
                            <Button disabled={!prop.allowSubmit} id={id + 'submit'}>
                                Submit
                            </Button>
                        </FormActions>
                    </FormLayout>
                )
            }}
        />
    )
}
