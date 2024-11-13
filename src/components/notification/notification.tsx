import { observer } from 'mobx-react-lite'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { NotificationGroupHandle, NotificationProps } from './types'

let groupRef: React.MutableRefObject<NotificationGroupHandle> | null = null

export const NotificationGroup = observer(
    forwardRef<NotificationGroupHandle, object>((props, ref) => {
        const notifyRef = useRef(null)
        const errorRef = useRef(null)

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
                    console.log(dto)
                },
            }
        }, [])
        return <div ref={errorRef}>error msg</div>
    }),
)

export const notification = (dto: NotificationProps) => {
    if (groupRef?.current) {
        groupRef.current.notification({ ...dto })
    }
}
