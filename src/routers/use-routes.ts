import { useCallback, useEffect, useState } from 'react'
import { MenuItemProps, RouteItemProps } from '../components'
import { RouterMenu } from './router-menus'

type UseRoutesProps = {
    menus: MenuItemProps[]
    routers: MenuItemProps[]
    findRoute: (path: string) => MenuItemProps | undefined
    groupIds: string[]
}

type MenuTreeReturn = {
    menus: MenuItemProps[]
    routers: MenuItemProps[]
    groupIds: string[]
}

type MenuTreeParam = {
    routeMenus: MenuItemProps[] | RouteItemProps[]
    routers?: MenuItemProps[]
    parent?: { id: string; path: string }
    groupIds?: string[]
}

export const useRoutes = (): UseRoutesProps => {
    const [routersSources, setRoutersSources] = useState<MenuItemProps[]>([])
    const [menusSources, setMenusSources] = useState<MenuItemProps[]>([])
    const [groupIds, setGroupIds] = useState<string[]>([])

    const generateMenuTree = useCallback(
        ({
            routeMenus = [],
            routers = [],
            parent,
            groupIds = [],
        }: MenuTreeParam): MenuTreeReturn => {
            const menus: MenuItemProps[] = []
            routeMenus.map((it, index) => {
                const parentId = parent ? `${parent.id}` : ''
                const id = `${parentId}${!parent ? 'menu' : ''}-${index + 1}`
                const data = {
                    ...it,
                    id,
                    path: `${parent ? parent.path : ''}${it.path ?? ''}`,
                    text: it.text ?? '',
                    parentId: parent ? parentId : undefined,
                    expanded: true,
                } as MenuItemProps
                if (!it.separator) {
                    if (!it.items || it.items.length === 0) {
                        routers.push(data)
                        if (!it.hidden) {
                            menus.push({
                                ...data,
                            })
                        }
                    } else {
                        const submenus = generateMenuTree({
                            routeMenus: it.items,
                            routers,
                            parent: {
                                id,
                                path: data.path,
                            },
                            groupIds,
                        })
                        menus.push({
                            ...data,
                            items: submenus.menus,
                        })
                        groupIds?.push(data.id)
                    }
                } else {
                    menus.push({ ...data })
                }
            })
            return { menus, routers, groupIds }
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
        const { menus, routers, groupIds } = generateMenuTree({
            routeMenus: RouterMenu,
        })
        setGroupIds(groupIds)
        setMenusSources(menus)
        setRoutersSources(routers)
    }, [generateMenuTree])

    return {
        groupIds,
        findRoute,
        menus: menusSources,
        routers: routersSources,
    }
}
