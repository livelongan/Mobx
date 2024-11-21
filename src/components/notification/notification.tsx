import { observer } from 'mobx-react-lite'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { NotificationDto, NotificationGroupHandle, NotificationProps } from './types'
import { IconButton, Snackbar, styled, Slide, Alert } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useStores } from '../../stores'
import { uniqueId } from 'lodash'

const Notify = styled(Alert)(
    ({ theme }) => `
        & .MuiAlert-icon, & .MuiAlert-message, & .MuiAlert-action {
            // color: ${theme.palette.background.default};
        }`,
)

let groupRef: React.MutableRefObject<NotificationGroupHandle> | null = null

export const NotificationGroup = observer(
    forwardRef<NotificationGroupHandle, object>((props, ref) => {
        const notifyRef = useRef(null)
        const errorRef = useRef(null)
        const { baseStore } = useStores()

        const handleClose = (dto: NotificationDto) => {
            baseStore.removeNotifications(dto)
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
                },
            }
        }, [baseStore])

        return (
            <div ref={errorRef}>
                {baseStore.notifications.map((it, index) => (
                    <Snackbar
                        open={true}
                        key={`Snackbar-${index}`}
                        autoHideDuration={6000}
                        TransitionComponent={(props) => <Slide {...props} direction="up" />}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        onClose={() => handleClose(it)}
                    >
                        <Notify
                            onClick={() => handleClose(it)}
                            severity={it.type}
                            variant="filled"
                            sx={{ width: '100%' }}
                            action={
                                <IconButton size="small" color="inherit" onClick={() => handleClose(it)}>
                                    <Close fontSize="small" />
                                </IconButton>
                            }
                        >
                            {it.message}
                        </Notify>
                    </Snackbar>
                ))}
            </div>
        )
    }),
)

export const notification = (dto: NotificationProps) => {
    if (groupRef?.current) {
        groupRef.current.notification({ ...dto })
    }
}
