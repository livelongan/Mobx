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
    FormRule,
} from '../../components'
import { useState } from 'react'
import { ProjectType } from '../../models'
import { PATTERN } from '../../constants'

type IProps = {
    page: string
    mode: FormMode
    data: ProjectType
    onSubmit: (data: ProjectType) => void
    onCancel: () => void
}
const RULES: FormRule = {
    id: {
        required: true,
        max: 10,
        min: 3,
        pattern: PATTERN.integer,
    },
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
            rules={RULES}
            onSubmit={handleSubmit}
            render={(prop) => {
                return (
                    <FormLayout>
                        <FieldLayout>
                            <FieldLayoutItem colSpan={maxSpan}>
                                <FormText
                                    name={'id'}
                                    label={'ID'}
                                    page={page}
                                    mode={mode}
                                    rule={RULES['id']}
                                />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText
                                    name={'name'}
                                    label={'Name'}
                                    page={page}
                                    mode={mode}
                                    readOnly
                                    hint="FormText"
                                />
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
                                    label={'Handle'}
                                    page={page}
                                    mode={mode}
                                />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'work'} label={'Work'} page={page} mode={mode} />
                            </FieldLayoutItem>
                            <FieldLayoutItem>
                                <FormText name={'togo'} label={'Togo'} page={page} mode={mode} />
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
