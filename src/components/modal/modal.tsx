import { Window as KendoModal, WindowProps } from '@progress/kendo-react-dialogs'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { GAP } from '../../constants'

export type ModalProps = PropsWithChildren<
    Partial<WindowProps> & {
        open?: boolean
        onClose?: () => void
    }
>
const ModalRoot = styled(KendoModal)`
    .k-window-titlebar {
        position: relative;
        padding: 0;
        height: 36px;
        background: var(--kendo-color-light);
        color: var(--kendo-color-surface);
        padding-left: ${GAP.middle}px;
    }
    .k-window-title {
        padding: 0;
    }
    .k-window-titlebar-actions {
        position: absolute;
        right: 0;
        top: 0;
        margin: 0;
        margin-right: 1px;
        margin-top: 1px;
    }
    .k-window-titlebar-actions .k-button {
        border-radius: 0;
        border: none !important;
        box-shadow: none !important;
        height: 35px;
        width: 40px;
        box-sizing: border-box;
    }
    .k-window-titlebar-actions .k-button:hover::before,
    .k-window-titlebar-actions .k-button.k-hover::before {
        opacity: 1;
        background-color: var(--kendo-color-light-hover);
    }
    .k-window-titlebar-actions .k-button:hover,
    .k-window-titlebar-actions .k-button.k-hover {
        color: var(--kendo-color-light);
    }
    .k-window-titlebar-actions .k-button:hover::after {
        box-shadow: none !important;
    }
    .k-window-titlebar-actions .k-button:after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .k-window-content {
        overflow: hidden;
        padding: 0;
    }
`
export const Modal = observer<ModalProps>(({ open = true, onClose, children, ...others }) => {
    const handleClose = () => {
        if (onClose) {
            onClose()
        }
    }
    return open ? (
        <ModalRoot {...others} onClose={handleClose}>
            {children}
        </ModalRoot>
    ) : null
})
