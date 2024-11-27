import { FormProps } from '@progress/kendo-react-form'
import {
    FormActions,
    FieldLayout,
    FormLayout,
    FormText,
    useForm,
    FieldLayoutItem,
    BaseButton,
    Modal,
} from '../../components'
import { useEffect, useState } from 'react'
type DtoProps = {
    id: string
}
type IProps = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const FormModal = (props: IProps) => {
    const { open, setOpen } = props
    const [details] = useState<DtoProps>({ id: 'id' })
    const { id, form, FormWrapper } = useForm({ page: 'demo', defaultValue: details })

    const handleSubmit: FormProps['onSubmit'] = (data) => {
        console.log('submit', data as DtoProps)
    }

    useEffect(() => {
        console.log(form)
    }, [form])

    return (
        <Modal
            open={open}
            onClose={() => {
                setOpen(!open)
            }}
        >
            <FormWrapper
                onSubmit={handleSubmit}
                render={(prop) => {
                    return (
                        <FormLayout>
                            <FieldLayout
                                cols={[{ width: '30%' }, { width: '30%' }, { width: '30%' }]}
                            >
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
                                <BaseButton
                                    label="Submit"
                                    disabled={!prop.allowSubmit}
                                    id={id + 'submit'}
                                    type="submit"
                                />
                            </FormActions>
                        </FormLayout>
                    )
                }}
            />
        </Modal>
    )
}
