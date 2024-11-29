import { BaseButton, ButtonLayout, Modal, PageLayout } from '../../components'
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
                                'Example Error: An error thrown to trigger error boundary',
                            )
                        })
                    }}
                />
                <BaseButton
                    page={pageName}
                    label="Open"
                    onClick={() => {
                        setOpen(true)
                    }}
                />
            </ButtonLayout>
            <Modal
                title={'Project'}
                open={open}
                onClose={() => {
                    setOpen(!open)
                }}
            >
                <FormDetails page={pageName} mode={'edit'} data={details} />
            </Modal>
        </PageLayout>
    )
}
