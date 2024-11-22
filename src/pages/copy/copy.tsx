import { observer } from 'mobx-react-lite'
import { Notification, NotificationGroup } from '@progress/kendo-react-notification'

const position = {
    topLeft: { top: 0, left: 0, alignItems: 'flex-start' },
    topCenter: { top: 200, left: '50%', transform: 'translateX(-50%)' },
    topRight: { top: 0, right: 0, alignItems: 'flex-end' },
    bottomLeft: { bottom: 0, left: 0, alignItems: 'flex-start' },
    bottomCenter: { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
    bottomRight: { bottom: 0, right: 0, alignItems: 'flex-end' },
}

export const Copy = observer(() => {
    const content = <span>Your data has been saved.</span>
    const notifications = [
        <Notification key="success" type={{ style: 'success', icon: true }}>
            {content}
        </Notification>,
        <Notification key="info" type={{ style: 'info' }}>
            {content}
        </Notification>,
        <Notification key="error" type={{ style: 'success', icon: true }}>
            {content}
        </Notification>,
        <Notification key="warning" type={{ style: 'warning' }}>
            {content}
        </Notification>,
        <Notification key="none" type={{ style: 'none' }}>
            {content}
        </Notification>,
    ]

    return (
        <>
            <NotificationGroup style={position.topCenter}>{notifications}</NotificationGroup>
        </>
    )
})
