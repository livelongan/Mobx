import { Button, ButtonProps } from '@progress/kendo-react-buttons'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'
import { BUTTON_PREFIX } from '../../constants'
import { getId } from '../../utils'

export type ButtonMode = 'cancel' | 'add' | 'edit'

export type LoadingButtonProps = {
    page?: string
    mode?: ButtonMode
    label: string
    loading?: boolean
    icon?: ReactNode
} & Omit<ButtonProps, 'startIcon'>

export const BaseButton = observer<LoadingButtonProps>(
    ({ page, mode = '', label, loading, svgIcon, icon, disabled, type, ...others }) => {
        const isCancel = label.toLocaleLowerCase() === 'cancel'
        return (
            <Button
                title={label}
                id={getId(`${mode}${BUTTON_PREFIX}${label}`, page)}
                rounded={null}
                themeColor={type === 'submit' || type === 'reset' || isCancel ? 'primary' : 'base'}
                fillMode={type === 'reset' || isCancel ? 'outline' : 'solid'}
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
