export type MenuProps = {
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
