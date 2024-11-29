import {
    Window as KendoModal,
    WindowMoveEvent,
    WindowProps,
    WindowWithoutContext,
} from '@progress/kendo-react-dialogs'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { GAP, MODAL_SUFFIX } from '../../constants'
import { useStores } from '../../stores'
import { getId } from '../../utils'

export type ModalState = {
    stage: 'DEFAULT' | 'FULLSCREEN' | 'MINIMIZED' | string
    isDragging: boolean
    top: number
    left: number
    width: number
    height: number
    focused: boolean
    zIndex: number
}

export type StoreModalProps = {
    id: string
    modal: ModalState & {
        widthRatio: number
        heightRatio: number
        initialWidth?: number
        initialHeight?: number
        initialLeft?: number
        initialTop?: number
    }
}

export type ModalProps = PropsWithChildren<
    Partial<WindowProps> & {
        page?: string
        widthRatio?: number
        heightRatio?: number
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
export const Modal = observer<ModalProps>(
    ({ page, open = true, widthRatio = 60, heightRatio = 68, onClose, children, ...others }) => {
        const uniqueId = useId()
        const [dependence] = useState({ loaded: false })
        const id = getId(MODAL_SUFFIX, page ?? uniqueId)
        const { baseStore } = useStores()
        const modalRef = useRef<WindowWithoutContext>(null)
        const initial = useMemo(() => {
            const width = document.body.clientWidth
            const height = document.body.clientHeight
            return {
                width: (widthRatio * width) / 100,
                height: (heightRatio * height) / 100,
            }
        }, [heightRatio, widthRatio])

        const unmount = useCallback(() => {
            if (dependence.loaded) {
                baseStore.delModal(id)
            }
        }, [baseStore, dependence, id])

        const handleClose = () => {
            unmount()
            if (onClose) {
                onClose()
            }
        }

        const handleResize = (event: WindowMoveEvent) => {
            const modal = baseStore.findModal(id)
            if (modal) {
                baseStore.addModal(id, {
                    ...modal,
                    width: event.width,
                    height: event.height,
                    top: event.top,
                    left: event.left,
                })
            }
        }

        useEffect(() => {
            return () => {
                unmount()
            }
        }, [unmount])

        useEffect(() => {
            if (open) {
                dependence.loaded = true
            }
        }, [dependence, open])

        useEffect(() => {
            const modal = modalRef.current
            if (open && modal) {
                baseStore.addModal(id, {
                    ...modal.state,
                    widthRatio,
                    heightRatio,
                    initialWidth: modal.props.initialHeight,
                    initialHeight: modal.props.initialHeight,
                    initialTop: modal.props.initialTop,
                    initialLeft: modal.props.initialLeft,
                })
            }
        }, [baseStore, heightRatio, id, open, widthRatio])

        return open ? (
            <ModalRoot
                id={id}
                initialWidth={initial.width}
                initialHeight={initial.height}
                minWidth={300}
                {...others}
                ref={modalRef}
                onClose={handleClose}
                onResize={handleResize}
            >
                {children}
            </ModalRoot>
        ) : null
    },
)
