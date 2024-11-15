import { ComponentType } from 'react'

export type RouteItemProps = {
    path?: string
    text?: string

    icon?: string
    separator?: boolean

    disabled?: boolean
    selected?: boolean
    role?: boolean
    hidden?: boolean
    component?: ComponentType

    children?: RouteItemProps[]
}

export type MenuItemProps = Omit<RouteItemProps, 'children'> & {
    id: string
    path: string
    text: string
    children?: MenuItemProps[]
}
