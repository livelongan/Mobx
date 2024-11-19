import { observer } from 'mobx-react-lite'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { NotificationGroupHandle, NotificationProps } from './types'
import { IconButton, Snackbar, styled } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useStores } from '../../stores'

const Notify = styled(Snackbar)(
    ({ theme }) => `
        & .MuiPaper-root.MuiSnackbarContent-root {
            background-color: ${theme.palette.primary.light};
        }`,
)

let groupRef: React.MutableRefObject<NotificationGroupHandle> | null = null

export const NotificationGroup = observer(
    forwardRef<NotificationGroupHandle, object>((props, ref) => {
        const notifyRef = useRef(null)
        const errorRef = useRef(null)
        const { baseStore } = useStores()

        const handleClose = (dto: NotificationProps) => {
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
                notification: (dto: NotificationProps) => {
                    baseStore.addNotifications(dto)
                },
            }
        }, [baseStore])

        const messages = baseStore.notifications.slice(0, 1)

        return (
            <div ref={errorRef}>
                {messages.map((it, index) => (
                    <Notify
                        open={true}
                        key={`Snackbar-${index}`}
                        autoHideDuration={6000}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        onClose={() => handleClose(it)}
                        message={it.message}
                        sx={{ bgcolor: (theme) => theme.palette.primary.main }}
                        action={
                            <IconButton size="small" color="inherit" onClick={() => handleClose(it)}>
                                <Close fontSize="small" />
                            </IconButton>
                        }
                    />
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
