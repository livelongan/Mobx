import { FormProps } from '@progress/kendo-react-form'
import {
    FormActions,
    FieldLayout,
    FormLayout,
    FormText,
    useForm,
    FieldLayoutItem,
    BaseButton,
    FormMode,
} from '../../components'
import { useEffect, useState } from 'react'

type FormDetailProps = {
    id: string
}

type IProps = {
    page: string
    mode: FormMode
    data: FormDetailProps
}

export const FormDetails = ({ page, mode, data }: IProps) => {
    const [details] = useState<FormDetailProps>(data)
    const { form, FormWrapper } = useForm({ page, defaultValue: details })

    const handleSubmit: FormProps['onSubmit'] = (data) => {
        console.log('submit', data as FormDetailProps)
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
                        <FieldLayout cols={[{ width: '30%' }, { width: '30%' }, { width: '30%' }]}>
                            <FieldLayoutItem>
                                <FormText name={'id'} label={'ID'} page={page} mode={mode} />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'name'} label={'Name'} page={page} mode={mode} />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'age'} label={'age'} page={page} mode={mode} />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText
                                    name={'layout'}
                                    label={'Layout'}
                                    page={page}
                                    mode={mode}
                                />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText
                                    name={'handle'}
                                    label={'handle'}
                                    page={page}
                                    mode={mode}
                                />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'work'} label={'Work'} page={page} mode={mode} />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'togo'} label={'ToGo'} page={page} mode={mode} />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText
                                    name={'school'}
                                    label={'School'}
                                    page={page}
                                    mode={mode}
                                />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'use'} label={'Use'} page={page} mode={mode} />
                            </FieldLayoutItem>
                        </FieldLayout>

                        <FormActions>
                            <BaseButton label="Submit" disabled={!prop.allowSubmit} type="submit" />
                        </FormActions>
                    </FormLayout>
                )
            }}
        />
    )
}
