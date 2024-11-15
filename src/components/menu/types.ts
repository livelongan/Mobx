import { ReactNode } from 'react'

export type RouteItemProps = {
    path?: string
    text?: string

    icon?: string
    separator?: boolean

    disabled?: boolean
    role?: boolean
    hidden?: boolean
    component?: ReactNode

    children?: RouteItemProps[]
}

export type MenuItemProps = Omit<RouteItemProps, 'children'> & {
    id: string
    path: string
    text: string
    children?: MenuItemProps[]
}
