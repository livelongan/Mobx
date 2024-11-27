import { Button, ButtonProps } from '@progress/kendo-react-buttons'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

export type LoadingButtonProps = {
    label: string
    loading?: boolean
    icon?: ReactNode
} & Omit<ButtonProps, 'startIcon'>

export const BaseButton = observer<LoadingButtonProps>(
    ({ label, loading, svgIcon, icon, disabled, ...others }) => {
        return (
            <Button
                title={label}
                themeColor={'base'}
                {...others}
                svgIcon={loading ? undefined : svgIcon}
                icon={loading ? 'loading' : icon}
                disabled={loading ? true : disabled}
            >
                {label}
            </Button>
        )
    },
)
