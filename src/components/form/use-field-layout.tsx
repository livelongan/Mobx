import { memo, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import {
    GridLayout,
    GridLayoutColumnProps,
    GridLayoutHandle,
    GridLayoutProps,
} from '@progress/kendo-react-layout'
import {
    FIELD_GAP,
    FIELD_LAYOUT_FLAG,
    FIELD_MIN_WIDTH,
    GAP,
    FIELD_MAX_COLUMN,
} from '../../constants'
import { useStores } from '../../stores'
import { getGridLayout } from '../../utils'
import { autorun } from 'mobx'

const PADDING = GAP.large

const FieldLayout = styled(GridLayout)`
    flex: 1;
    padding: ${PADDING / 2}px;
    padding-left: ${PADDING}px;
    margin-right: ${PADDING / 2}px;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, ${FIELD_MIN_WIDTH}px);
`

export const useFieldLayout = () => {
    const { baseStore } = useStores()
    const [width, setWidth] = useState<number>()
    const [cols, setCols] = useState<GridLayoutColumnProps[]>()
    const [maxSpan, setMaxSpan] = useState<number>(FIELD_MAX_COLUMN)
    const ref: React.RefObject<GridLayoutHandle> = useRef(null)

    const resize = useCallback(() => {
        if (width) {
            const layout = getGridLayout(width)
            if (layout) {
                setCols(layout.cols)
                setMaxSpan(layout.max)
            }
        }
    }, [width])

    useEffect(() => {
        resize()
    }, [resize, width])

    useEffect(() => {
        const disposer = autorun(() => {
            const element = ref.current?.element
            if (element && baseStore.modalResized !== undefined) {
                setWidth(element.clientWidth)
            }
        })

        return () => {
            disposer()
        }
    }, [baseStore.modalResized])

    useEffect(() => {
        const disposer = autorun(() => {
            const element = ref.current?.element
            if (element && baseStore.modalStaged !== undefined) {
                setWidth(element.clientWidth)
                resize()
            }
        })

        return () => {
            disposer()
        }
    }, [baseStore.modalStaged, resize])

    useEffect(() => {
        const element = ref.current?.element
        if (element) {
            let width = document.body.clientWidth
            const modal = element.closest('.k-window')

            const modalId = modal?.getAttribute('id')
            if (modalId) {
                const modalProps = baseStore.findModal(modalId)
                if (modalProps) {
                    width = (width * modalProps.widthRatio) / 100
                }
            }
            setWidth(width)
        }
    }, [baseStore])

    const selector = memo(
        ({ children, className, ...others }: PropsWithChildren<GridLayoutProps>) => {
            const cls = `${FIELD_LAYOUT_FLAG} ${className ?? ''}`.trim()
            return (
                <FieldLayout
                    {...others}
                    cols={cols}
                    className={cls}
                    gap={{ cols: FIELD_GAP, rows: 0 }}
                    ref={ref}
                >
                    {children}
                </FieldLayout>
            )
        },
    )

    return {
        maxSpan,
        FieldLayout: selector,
    }
}
