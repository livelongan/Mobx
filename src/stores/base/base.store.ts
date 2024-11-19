import { cast, SnapshotOut, types } from 'mobx-state-tree'
import { MenuItemProps, NotificationProps } from '../../components'
import { PaletteMode } from '@mui/material'

export const BaseStoreModel = types
    .model('BaseStoreModel')
    .props({
        theme: types.frozen<PaletteMode>(),
        route: types.maybe(types.frozen<MenuItemProps>()),
        expandIds: types.array(types.string),
        collapse: types.boolean,
        notifications: types.array(types.frozen<NotificationProps>()),
    })
    .views((self) => ({
        get expandedIds() {
            return self.expandIds.toJSON()
        },
    }))
    .actions((self) => ({
        setTheme(theme: PaletteMode) {
            self.theme = theme
        },
        setCollapse(collapse: boolean) {
            self.collapse = collapse
        },
        setRoute(route: MenuItemProps | undefined) {
            self.route = route
        },
        setExpandedId(ids: string[]) {
            self.expandIds = cast(ids)
        },
        addNotifications(dto: NotificationProps) {
            self.notifications.push(dto)
        },
        removeNotifications(dto: NotificationProps) {
            const index = self.notifications.findIndex((it) => it === dto)
            if (index >= 0) {
                self.notifications.splice(0, index)
            }
        },
    }))

export type BaseStoreType = SnapshotOut<typeof BaseStoreModel>
