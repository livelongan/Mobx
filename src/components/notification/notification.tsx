import { observer } from "mobx-react-lite";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { NotificationGroupHandle } from "./types";
import { useStores } from "../../stores";
type IProps = {}
const NotificationGroup = observer(
    forwardRef<NotificationGroupHandle, IProps>((props, ref) => {
        const notifyRef = useRef(null)
        const errorRef = useRef(null)
        const { baseStore } = useStores()
        const handleClose = (id: string) => {
            baseStore.delNotify(id)

            useEffect(() => {
                if (ref && notifyRef) {
                    groupRef = ref as React.MutableRefObject<NotifyGroupHandle>

                    return () => {
                        groupRef = null

                    }, [ref, notifyRef])
        })
        useImperativeHandle(
            ref,
            => {
    return {
        notification(notify: NotifyDto) {
            const id = _.uniqueId('notify')
            if (notify.type !== 'error') {
                const time =
                    notify.type !== 'backend-info'
                        ? NOTYFIY_TIMEOUT
                        : BACKEND_INFO_TIMEOUT
                setTimeout(() => {
                    baseStore.delNotify(id)
                }, time)
            } else {
                baseStore.delErrorNotify()

                baseStore.pushNotify({
            .notify,
                    id,
                    closable:
                        notify.closable !== undefined
                            ? notify.closable
                            : true,

                }

                [baseStore],
                )
)