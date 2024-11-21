import { observer } from 'mobx-react-lite'
import { Form, FormInput, FormNumeric, FormSelect, FormSelectSourceProps, LoadingButton } from '../../components'
import { useForm, FieldValues } from 'react-hook-form'
import { useEffect, useCallback, useState } from 'react'
import { SaveOutlined } from '@mui/icons-material'

type IFormProps = {
    firstName: string
    lastName: string
    food: string
    tall: number | null
    age: FormSelectSourceProps
}

const sources = [
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
]

export const ReactPage = observer(() => {
    // const [dependence] = useState({
    //     state: true,
    // })
    const [loading, setLoading] = useState(false)
    const [details] = useState<IFormProps>({
        firstName: 'sd',
        lastName: 'sd',
        food: 'apple',
        tall: null,
        age: { id: 10, value: 10 },
    })
    const form = useForm<IFormProps>({ defaultValues: { ...details } })

    const onSubmit: React.FormEventHandler<object> = (event) => {
        event.preventDefault()
        setLoading(true)
        console.log(getValues())
        console.log(form)
    }

    const getValues = useCallback(() => {
        const data: FieldValues = { ...details }
        Object.keys(data).forEach((key) => {
            const it = key as keyof IFormProps
            data[it] = form.watch(it)
        })
        return data as IFormProps
    }, [details, form])

    useEffect(() => {
        console.log(getValues())
    }, [form.formState, getValues])

    return (
        <Form onSubmit={onSubmit} actions={<LoadingButton type="submit" label="Submit" loading={loading} icon={<SaveOutlined />} />}>
            <FormInput form={form} field={'firstName'} label={'First Name'} options={{ required: true, maxLength: 20 }} />
            <FormInput form={form} field={'lastName'} label={'Last Name'} options={{ required: true, maxLength: 20 }} />
            <FormNumeric form={form} field={'tall'} label={'Tall'} decimal={2} />
            <FormSelect form={form} field={'food'} label={'Love Food'} sources={['Apple', 'Banana', 'Peach', 'Pear', 'Grape']} />
            <FormSelect form={form} field={'age'} label={'Age'} sources={sources} />
        </Form>
    )
})
