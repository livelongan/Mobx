import { FormProps } from '@progress/kendo-react-form'
import { Button } from '@progress/kendo-react-buttons'
import {
    FormActions,
    FieldLayout,
    FormLayout,
    FormText,
    useForm,
    FieldLayoutItem,
} from '../../components'
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
                        <FieldLayout cols={[{ width: '33%' }, { width: '33%' }, { width: '33%' }]}>
                            <FieldLayoutItem>
                                <FormText name={'id'} label={'Label'} required />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'id'} label={'Label'} required />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'id'} label={'Label'} required />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'id'} label={'Label'} required />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'id'} label={'Label'} required />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'id'} label={'Label'} required />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'id'} label={'Label'} required />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'id'} label={'Label'} required />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'id'} label={'Label'} required />
                            </FieldLayoutItem>
                        </FieldLayout>

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
