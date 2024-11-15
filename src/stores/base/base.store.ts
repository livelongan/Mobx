import { cast, SnapshotOut, types } from 'mobx-state-tree'
import { MenuItemProps } from '../../components'
import { ThemeMode } from '../../theme'

export const BaseStoreModel = types
    .model('BaseStoreModel')
    .props({
        theme: types.frozen<ThemeMode>(),
        route: types.maybe(types.frozen<MenuItemProps>()),
        expandIds: types.array(types.string),
        collapse: types.boolean,
        notifications: types.null,
    })
    .views((self) => ({
        get expandedIds() {
            return self.expandIds.toJSON()
        },
    }))
    .actions((self) => ({
        setTheme(theme: ThemeMode) {
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
    }))

export type BaseStoreType = SnapshotOut<typeof BaseStoreModel>
