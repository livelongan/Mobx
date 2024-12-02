import { BaseButton, ButtonLayout, Modal, openDialog, PageLayout } from '../../components'
import { useState, useTransition } from 'react'
import { FormDetails } from './details'
import { ProjectType } from '../../models'
import { InitDetails } from './constant'

const pageName = 'project'

export const FormDemo = () => {
    const [open, setOpen] = useState(false)
    const [details] = useState<ProjectType>(InitDetails)
    const [pending, startTransition] = useTransition()

    const handleSubmit = (data: ProjectType) => {
        console.log(data)
    }
    const handleCancel = () => {
        setOpen(false)
    }
    return (
        <PageLayout id={pageName}>
            <ButtonLayout>
                <BaseButton
                    page={pageName}
                    label="Error"
                    disabled={pending}
                    onClick={() => {
                        startTransition(() => {
                            throw new Error(
                                'Example Error: An error thrown to trigger error boundary.',
                            )
                        })
                    }}
                />
                <BaseButton
                    page={pageName}
                    label="Open Modal"
                    onClick={() => {
                        setOpen(true)
                    }}
                />
                <BaseButton
                    page={pageName}
                    label="Open Dialog"
                    onClick={() => {
                        openDialog({
                            title: 'Dialog',
                            content: 'Are you sure you want to continue?',
                        })
                    }}
                />
            </ButtonLayout>
            <Modal
                title={'Project'}
                open={open}
                widthRatio={50}
                heightRatio={50}
                onClose={() => {
                    setOpen(!open)
                }}
            >
                <FormDetails
                    page={pageName}
                    mode={'edit'}
                    data={details}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />
            </Modal>
        </PageLayout>
    )
}
