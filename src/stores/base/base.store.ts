import { cast, SnapshotOut, types } from 'mobx-state-tree'
import { MenuItemProps, NotificationDto } from '../../components'
import { PaletteMode } from '@mui/material'

export const BaseStoreModel = types
    .model('BaseStoreModel')
    .props({
        theme: types.frozen<PaletteMode>(),
        route: types.maybe(types.frozen<MenuItemProps>()),
        expandIds: types.array(types.string),
        collapse: types.boolean,
        notifications: types.array(types.frozen<NotificationDto>()),
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
        addNotifications(dto: NotificationDto) {
            self.notifications.push(dto)
        },
        removeNotifications(dto: NotificationDto) {
            const index = self.notifications.findIndex((it) => it.id === dto.id)
            if (index >= 0) {
                self.notifications.splice(index, 1)
            }
        },
    }))

export type BaseStoreType = SnapshotOut<typeof BaseStoreModel>
