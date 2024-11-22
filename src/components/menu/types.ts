import { DrawerItemProps } from '@progress/kendo-react-layout'
import { ReactNode } from 'react'

export type RouteItemProps = DrawerItemProps & {
    path?: string
    role?: boolean
    hidden?: boolean
    separator?: boolean
    component?: ReactNode
    expanded?: boolean
}

export type MenuItemProps = Omit<RouteItemProps, 'children'> & {
    id: string
    path: string
    text: string
    children?: MenuItemProps[]
}
