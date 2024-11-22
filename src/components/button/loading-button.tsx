import { Button, ButtonProps, CircularProgress } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

export type LoadingButtonProps = {
    label: string
    loading?: boolean
    icon?: ReactNode
} & Omit<ButtonProps, 'startIcon'>

export const LoadingButton = observer<LoadingButtonProps>(({ icon, label, loading, disabled, ...others }) => {
    return (
        <Button variant="outlined" {...others} startIcon={loading ? <CircularProgress size={18} /> : icon} disabled={loading ? true : disabled}>
            {label}
        </Button>
    )
})
