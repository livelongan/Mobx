import { Button, ButtonProps } from '@progress/kendo-react-buttons'
import { saveIcon, xIcon } from '@progress/kendo-svg-icons'
import { observer } from 'mobx-react-lite'
import { ReactNode, useMemo } from 'react'
import { styled } from 'styled-components'
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

const Root = styled(Button)``
export const BaseButton = observer<LoadingButtonProps>(
    ({ page, mode = '', label, loading, svgIcon, icon, disabled, type, ...others }) => {
        const isCancel = useMemo(() => label.toLocaleLowerCase() === 'cancel', [label])
        const isSubmit = useMemo(() => type === 'submit', [type])

        const svg = useMemo(() => {
            if (loading) {
                return undefined
            } else if (!isSubmit && !isCancel) {
                return svgIcon
            }
            return isSubmit ? saveIcon : xIcon
        }, [isCancel, isSubmit, loading, svgIcon])

        return (
            <Root
                title={label}
                id={getId(`${mode}${BUTTON_PREFIX}${label}`, page)}
                rounded={null}
                themeColor={type === 'submit' || type === 'reset' || isCancel ? 'primary' : 'base'}
                fillMode={type === 'reset' || isCancel ? 'outline' : 'solid'}
                {...others}
                svgIcon={svg}
                icon={loading ? 'loading' : icon}
                disabled={loading ? true : disabled}
                formNoValidate
            >
                {label}
            </Root>
        )
    },
)
