import { DrawerItemProps } from '@progress/kendo-react-layout'

export type MenuProps = DrawerItemProps & {
    path: string
    children?: MenuProps[]
    className?: string
    style?: React.CSSProperties
    disabled?: boolean
    icon?: string
    selected?: boolean
    separator?: boolean
    text?: string
    index?: number
    tabIndex?: number
    level?: number
}
