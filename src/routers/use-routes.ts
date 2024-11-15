import { useCallback, useEffect, useState } from 'react'
import { MenuItemProps, RouteItemProps } from '../components'
import { RoutesConfig } from './routes-config'

type UseRoutesProps = {
    menus: MenuItemProps[]
    routers: MenuItemProps[]
    findRoute: (path: string) => MenuItemProps | undefined
}
export const useRoutes = (): UseRoutesProps => {
    const [routersSources, setRoutersSources] = useState<MenuItemProps[]>([])
    const [menusSources, setMenusSources] = useState<MenuItemProps[]>([])

    const generateMenuTree = useCallback(
        (
            menus: MenuItemProps[] | RouteItemProps[] = [],
            routers: MenuItemProps[] = [],
            parent: MenuItemProps | null = null,
        ): { menus: MenuItemProps[]; routers: MenuItemProps[] } => {
            const menusList: MenuItemProps[] = []
            menus.map((it, index) => {
                const parentId = parent ? `${parent.id}-` : ''
                const id = `${parentId}${!parent ? 'menu' : ''}-${index + 1}`
                const config: MenuItemProps = {
                    ...it,
                    id,
                    path: it.path ?? '',
                    text: it.text ?? '',
                    children: undefined,
                }
                if (!it.separator) {
                    const children = it.children ?? []
                    if (children.length === 0) {
                        menusList.push(config)
                        routers.push(config)
                    } else {
                        const submenus = generateMenuTree(it.children, routers, config)
                        config.children = submenus.menus
                        menusList.push(config)
                    }
                } else {
                    menusList.push(config)
                }
            })
            return { menus: menusList, routers }
        },
        [],
    )

    const findRoute = useCallback(
        (path: string) => {
            return routersSources.find((it) => it.path.toLowerCase() === path.toLowerCase())
        },
        [routersSources],
    )

    useEffect(() => {
        const { menus, routers } = generateMenuTree(RoutesConfig)
        setMenusSources(menus)
        setRoutersSources(routers)
    }, [generateMenuTree])

    return {
        findRoute,
        menus: menusSources,
        routers: routersSources,
    }
}
