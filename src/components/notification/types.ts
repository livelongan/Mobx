export type NotificationProps = {
    title?: string
    closable?: boolean
    message?: JSX.Element | string
    type: 'success' | 'error' | 'warning' | 'info'
    error?: {
        url?: string
        title?: string
        message?: string
    }
}
export type NotificationDto = NotificationProps & {
    id: string
}

export type NotificationGroupHandle = {
    notification(message: NotificationProps): void
}
