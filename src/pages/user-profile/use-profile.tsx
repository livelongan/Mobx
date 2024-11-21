import { observer } from 'mobx-react-lite'
import { Button } from '@mui/material'
import { Form, FormInput, FormSelect } from '../../components'
import { useForm, SubmitHandler } from 'react-hook-form'

type IFormProps = {
    firstName: string
    lastName: string
    age: number
}

export const UserProfile = observer(() => {
    const form = useForm<IFormProps>()
    const onSubmit: SubmitHandler<IFormProps> = (data) => console.log(data)

    return (
        <Form onSubmit={form.handleSubmit(onSubmit)} actions={<Button type="submit">Submit</Button>}>
            <FormInput form={form} field={'firstName'} label={'First Name'} options={{ required: true, maxLength: 2 }} />
            <FormInput form={form} field={'lastName'} label={'Last Name'} options={{ required: true, maxLength: 2 }} />
            <FormSelect
                form={form}
                field={'age'}
                label={'Age'}
                options={{ required: 'This field is required', maxLength: 2 }}
                sources={[
                    { id: 10, value: 10 },
                    { id: 20, value: 20 },
                    { id: 30, value: 30 },
                    { id: 40, value: 40 },
                    { id: 50, value: 50 },
                    { id: 60, value: 60 },
                    { id: 70, value: 70 },
                    { id: 80, value: 80 },
                    { id: 90, value: 90 },
                    { id: 100, value: 100 },
                    { id: 110, value: 110 },
                    { id: 120, value: 120 },
                    { id: 130, value: 130 },
                    { id: 140, value: 100 },
                    { id: 150, value: 110 },
                    { id: 160, value: 120 },
                    { id: 170, value: 130 },
                ]}
            />
        </Form>
    )
})
