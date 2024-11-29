import { BaseButton, ButtonLayout, Modal, openDialog, PageLayout } from '../../components'
import { useState, useTransition } from 'react'
import { FormDetails } from './details'
import { ProjectType } from '../../models'

const pageName = 'project'

export const FormDemo = () => {
    const [open, setOpen] = useState(false)
    const [details] = useState<ProjectType>({
        id: 'id',
    })
    const [pending, startTransition] = useTransition()

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
                heightRatio={40}
                onClose={() => {
                    setOpen(!open)
                }}
            >
                <FormDetails page={pageName} mode={'edit'} data={details} />
            </Modal>
        </PageLayout>
    )
}
