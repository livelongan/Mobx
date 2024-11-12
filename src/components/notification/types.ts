export type NotificationProps = {
    title?: string
    type: 'none' | 'success' | 'error' | 'warning' | 'info' | 'backend-info'
    message?: JSX.Element | string
    closable?: boolean
    error?: {
        url?: string
        title?: string
        message?: string
    }
}

export type NotificationGroupHandle = {
    notification(message: NotificationProps): void
}
