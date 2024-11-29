import { memo, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import {
    GridLayout,
    GridLayoutColumnProps,
    GridLayoutHandle,
    GridLayoutProps,
} from '@progress/kendo-react-layout'
import { FIELD_LAYOUT_FLAG, FIELD_MIN_WIDTH, GAP, MAX_GRID_COLUMN } from '../../constants'
import { useStores } from '../../stores'
import { getGridLayout } from '../../utils'
import { Loading } from '../loading'
import { autorun } from 'mobx'
const PADDING = GAP.large

const Layout = styled(GridLayout)`
    flex: 1;
    padding: ${PADDING}px;
    padding-top: 0;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, ${FIELD_MIN_WIDTH}px);
`

export const useFieldLayout = () => {
    const { baseStore } = useStores()
    const [dependence] = useState({ rendering: false })
    const [width, setWidth] = useState<number>()
    const [cols, setCols] = useState<GridLayoutColumnProps[]>()
    const [maxSpan, setMaxSpan] = useState<number>(MAX_GRID_COLUMN)
    const ref: React.RefObject<GridLayoutHandle> = useRef(null)

    useEffect(() => {
        if (width) {
            const layout = getGridLayout(width)
            if (layout) {
                setCols(layout.cols)
                setMaxSpan(layout.max)
            }
        }
    }, [width])

    useEffect(() => {
        const disposer = autorun(() => {
            const element = ref.current?.element
            if (element && baseStore.modalChanged !== undefined) {
                setWidth(element.clientWidth)
            }
        })

        return () => {
            disposer()
        }
    }, [baseStore.modalChanged])

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
                <Layout
                    {...others}
                    cols={cols}
                    className={cls}
                    gap={{ cols: GAP.middle, rows: 0 }}
                    ref={ref}
                >
                    {children}
                    {dependence.rendering && <Loading />}
                </Layout>
            )
        },
    )

    return {
        maxSpan,
        FieldLayout: selector,
    }
}

// export const useFieldLayout = () => {
//     const { baseStore } = useStores()
//     const [dependence] = useState({ rendering: false })
//     const [width, setWidth] = useState<number>()
//     const [cols, setCols] = useState<GridLayoutColumnProps[]>()
//     const [maxSpan, setMaxSpan] = useState<number>(MAX_GRID_COLUMN)
//     const ref: React.RefObject<GridLayoutHandle> = useRef(null)

//     useEffect(() => {
//         if (width) {
//             const layout = getGridLayout(width)
//             if (layout) {
//                 setCols(layout.cols)
//                 setMaxSpan(layout.max)
//             }
//         }
//     }, [width])

//     useEffect(() => {
//         const element = ref.current?.element
//         if (element && baseStore.modalChanged !== undefined) {
//             setWidth(element.clientWidth)
//         }
//     }, [baseStore.modalChanged])

//     useEffect(() => {
//         const element = ref.current?.element
//         if (element) {
//             let width = document.body.clientWidth
//             const modal = element.closest('.k-window')

//             const modalId = modal?.getAttribute('id')
//             if (modalId) {
//                 const modalProps = baseStore.findModal(modalId)
//                 if (modalProps) {
//                     width = (width * modalProps.widthRatio) / 100
//                 }
//             }
//             setWidth(width)
//         }
//     }, [baseStore])

//     const selector = memo(
//         ({ children, className, ...others }: PropsWithChildren<GridLayoutProps>) => {
//             const cls = `${FIELD_LAYOUT_FLAG} ${className ?? ''}`.trim()
//             return (
//                 <Layout
//                     {...others}
//                     cols={cols}
//                     className={cls}
//                     gap={{ cols: GAP.middle, rows: 0 }}
//                     ref={ref}
//                 >
//                     {children}
//                     {dependence.rendering && <Loading />}
//                 </Layout>
//             )
//         },
//     )

//     return {
//         maxSpan,
//         FieldLayout: selector,
//     }
// }
