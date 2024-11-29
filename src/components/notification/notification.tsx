import { observer } from 'mobx-react-lite'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import {
    NotificationDto,
    NotificationGroupHandle,
    NotificationProps,
    OpenDialogDto,
    OpenDialogProps,
} from './types'
import { useStores } from '../../stores'
import { uniqueId } from 'lodash'
import { NotificationGroup, Notification } from '@progress/kendo-react-notification'
import { Expand } from '@progress/kendo-react-animation'
import { styled } from 'styled-components'
import { Dialog as KendoDialog, DialogActionsBar } from '@progress/kendo-react-dialogs'
import { BaseButton } from '../button'
import {
    GAP,
    NOTIFICATION_MAX_HEIGHT,
    NOTIFICATION_MAX_WIDTH,
    NOTIFICATION_TIME,
} from '../../constants'
import { DialogModalCss } from '../../theme'

const Notify = styled(Notification)`
    /* align-items: unset; */
    .k-notification-status {
        align-items: unset;
        align-self: flex-start;
        margin: ${GAP.normal}px;
    }
    .k-notification-actions {
        align-self: flex-start;
    }
    .k-notification-close-action {
        border-radius: 50%;
        padding: ${GAP.normal}px;
        transition: background 0.2s ease-in-out;
    }
    .k-notification-close-action:hover {
        background: var(--color-hover);
    }
`
const Root = styled(NotificationGroup)`
    max-width: ${NOTIFICATION_MAX_WIDTH};
    max-height: ${NOTIFICATION_MAX_HEIGHT};
`

const DialogContent = styled.div`
    line-height: 2;
    word-break: break-word;
`
const Dialog = styled(KendoDialog)`
    margin-top: -50px;
    ${DialogModalCss}
    .k-dialog-content {
        overflow: hidden;
        overflow-y: overlay;
        max-height: 400px;
        min-height: 40px;
        max-width: 600px;
        min-width: 300px;
        padding: ${GAP.large}px;
        padding-right: ${GAP.large / 2}px;
        margin-right: ${GAP.large / 2}px;
    }
`
let groupRef: React.MutableRefObject<NotificationGroupHandle> | null = null

export const Snackbar = observer(
    forwardRef<NotificationGroupHandle, object>((props, ref) => {
        const notifyRef = useRef(null)
        const errorRef = useRef(null)
        const [dialogs, setDialogs] = useState<OpenDialogDto[]>([])
        const timeout = useRef<NodeJS.Timeout>()
        const { baseStore } = useStores()

        const handleCloseNotification = (dto: NotificationDto) => {
            baseStore.delNotifications(dto.id)
        }

        const handleCloseDialog = (dto: OpenDialogDto) => {
            const data = [...dialogs]
            const has = dialogs.findIndex((it) => it.id === dto.id)
            if (has >= 0) {
                data.splice(has, 1)
            }
            setDialogs(data)
        }

        useEffect(() => {
            if (ref && notifyRef) {
                groupRef = ref as React.MutableRefObject<NotificationGroupHandle>
            }
            return () => {
                groupRef = null
            }
        }, [ref, notifyRef])

        useImperativeHandle(ref, () => {
            return {
                notification: (item: NotificationProps) => {
                    const dto = { ...item, id: uniqueId('notify') } as NotificationDto
                    baseStore.addNotifications(dto)
                    clearTimeout(timeout.current)
                    timeout.current = setTimeout(() => {
                        baseStore.delNotifications(dto.id)
                        clearTimeout(timeout.current)
                    }, NOTIFICATION_TIME)
                },
                openDialog: (item: OpenDialogProps) => {
                    const data = [...dialogs]
                    data.push({ ...item, id: `dialog-${dialogs.length + 1}` })
                    setDialogs(data)
                },
            }
        }, [baseStore, dialogs, timeout])

        return (
            <Root
                ref={errorRef}
                style={{
                    right: 30,
                    bottom: 30,
                    alignItems: 'flex-start',
                    flexWrap: 'wrap-reverse',
                }}
            >
                <Expand>
                    {baseStore.notifications.map((it) => (
                        <Notify
                            key={it.id}
                            closable
                            onClose={() => handleCloseNotification(it)}
                            type={{ style: it.type, icon: true }}
                        >
                            {it.message}
                        </Notify>
                    ))}
                </Expand>
                {dialogs.map((it) => (
                    <Dialog
                        {...it}
                        key={it.id}
                        id={it.id}
                        overlayStyle={{
                            background: 'var(--color-overlay)',
                        }}
                        onClose={() => {
                            handleCloseDialog(it)
                        }}
                    >
                        <DialogContent>{it.content}</DialogContent>
                        <DialogActionsBar layout="end">
                            <BaseButton
                                label={'Confirm'}
                                themeColor={'primary'}
                                onClick={() => {
                                    handleCloseDialog(it)
                                }}
                            />
                            <BaseButton
                                label={'Cancel'}
                                themeColor={'primary'}
                                fillMode={'outline'}
                                onClick={() => {
                                    handleCloseDialog(it)
                                }}
                            />
                        </DialogActionsBar>
                    </Dialog>
                ))}
            </Root>
        )
    }),
)

export const notification = (dto: NotificationProps) => {
    if (groupRef?.current) {
        groupRef.current.notification({ ...dto })
    }
}

export const openDialog = (dto: OpenDialogProps) => {
    if (groupRef?.current) {
        groupRef.current.openDialog({ ...dto })
    }
}
