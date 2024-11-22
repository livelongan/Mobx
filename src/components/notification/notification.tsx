import { observer } from 'mobx-react-lite'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { NotificationDto, NotificationGroupHandle, NotificationProps } from './types'
import { useStores } from '../../stores'
import { uniqueId } from 'lodash'
import { NotificationGroup, Notification } from '@progress/kendo-react-notification'
import { Slide } from '@progress/kendo-react-animation'
import { styled } from 'styled-components'

const Notify = styled(Notification)(() => ``)
const Root = styled(NotificationGroup)(() => ``)
let groupRef: React.MutableRefObject<NotificationGroupHandle> | null = null

export const Snackbar = observer(
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
            <Root
                ref={errorRef}
                style={{
                    right: 30,
                    bottom: 30,
                    alignItems: 'flex-start',
                    flexWrap: 'wrap-reverse',
                }}
            >
                {baseStore.notifications.map((it, index) => (
                    <Slide key={`Snackbar-${index}`} direction={'up'}>
                        <Notify
                            closable
                            onClose={() => handleClose(it)}
                            type={{ style: it.type, icon: true }}
                        >
                            {it.message}
                        </Notify>
                    </Slide>
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
