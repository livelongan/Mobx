import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'
import { MenuItem } from './menu-item'
import { useStores } from '../../stores'
import { useCallback, useMemo } from 'react'
import { useRoutes } from '../../routers'
import { Divider, styled } from '@mui/material'
import { MenuItemProps } from './types'

const TreeRoot = styled(SimpleTreeView)(
    () => `
    & .MuiTreeItem-content {
        gap: 0;
        padding: 0;
    }
    & .MuiTreeItem-content .MuiTreeItem-iconContainer {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
    }
    & .MuiTreeItem-groupTransition {
        padding-left: 0;
    }
`,
)
const TreeItemRoot = styled(TreeItem)(
    ({ theme }) => `
    // &.Mui-focused .menu-wrapper:{
    //     background-color: ${theme.palette.action.disabledBackground}
    // }
`,
)

export const MenuTree = observer(() => {
    const { baseStore } = useStores()
    const { menus } = useRoutes()
    const navigate = useNavigate()

    const collapsed = useMemo(() => baseStore.collapse, [baseStore.collapse])
    const expanded = useMemo(() => baseStore.expandedIds, [baseStore.expandedIds])

    const handleMenuClick = useCallback(
        (menu: MenuItemProps, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
            if (menu.disabled) {
                return
            }
            event.stopPropagation()
            event.preventDefault()
            if (!menu.separator) {
                if (!menu.children || menu.children.length < 0) {
                    navigate(menu.path)
                } else {
                    const ids = [...expanded]
                    const index = ids.findIndex((id) => id === menu.id)
                    if (index >= 0) {
                        ids.splice(index, 1)
                    } else {
                        ids.push(menu.id)
                    }
                    baseStore.setExpandedId(ids)
                }
            }
        },
        [baseStore, expanded, navigate],
    )

    return (
        <TreeRoot slots={{ expandIcon: undefined, collapseIcon: undefined }} expandedItems={expanded}>
            {menus.map((it) => {
                const children = it.children ?? []
                if (!it.separator) {
                    if (children.length === 0) {
                        return (
                            <TreeItemRoot
                                key={it.id}
                                itemId={it.id}
                                label={<MenuItem {...it} />}
                                disabled={it.disabled}
                                onClick={handleMenuClick.bind(null, it)}
                            />
                        )
                    } else {
                        return (
                            <TreeItemRoot
                                key={it.id}
                                itemId={it.id}
                                label={<MenuItem {...it} />}
                                disabled={it.disabled}
                                className="menu-group"
                                onClick={handleMenuClick.bind(null, it)}
                            >
                                {collapsed &&
                                    children.map((child) => (
                                        <TreeItemRoot
                                            key={child.id}
                                            itemId={child.id}
                                            disabled={it.disabled}
                                            label={<MenuItem {...child} />}
                                            className="submenu"
                                            onClick={handleMenuClick.bind(null, child)}
                                        />
                                    ))}
                            </TreeItemRoot>
                        )
                    }
                } else {
                    return <Divider key={it.id} variant="inset" component="li" sx={{ mx: '1px' }} />
                }
            })}
        </TreeRoot>
    )
})
