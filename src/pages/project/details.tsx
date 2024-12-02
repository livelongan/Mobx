import { FormProps } from '@progress/kendo-react-form'
import {
    ModalActionBar,
    useFieldLayout,
    FormLayout,
    FormText,
    useForm,
    FieldLayoutItem,
    BaseButton,
    FormMode,
} from '../../components'
import { useState } from 'react'
import { ProjectType } from '../../models'

type IProps = {
    page: string
    mode: FormMode
    data: ProjectType
    onSubmit: (data: ProjectType) => void
    onCancel: () => void
}

export const FormDetails = ({ page, mode, data, onSubmit, onCancel }: IProps) => {
    const { FieldLayout, maxSpan } = useFieldLayout()
    const [details] = useState<ProjectType>(data)
    const { form, FormWrapper } = useForm({ page, defaultValue: details })

    const handleSubmit: FormProps['onSubmit'] = (data) => {
        onSubmit(data as ProjectType)
        console.log(form)
    }

    return (
        <FormWrapper
            onSubmit={handleSubmit}
            render={(prop) => {
                return (
                    <FormLayout>
                        <FieldLayout>
                            <FieldLayoutItem colSpan={maxSpan}>
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

                        <ModalActionBar>
                            <BaseButton label="Submit" disabled={!prop.allowSubmit} type="submit" />
                            <BaseButton label="Cancel" onClick={onCancel} />
                        </ModalActionBar>
                    </FormLayout>
                )
            }}
        />
    )
}
