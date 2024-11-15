import { cast, SnapshotOut, types } from 'mobx-state-tree'
import { MenuItemProps } from '../../components'

export const BaseStoreModel = types
    .model('BaseStoreModel')
    .props({
        collapse: types.boolean,
        expandIds: types.array(types.string),
        route: types.maybe(types.frozen<MenuItemProps>()),
        notifications: types.null,
    })
    .views((self) => ({
        get expandedIds() {
            return self.expandIds.toJSON()
        },
    }))
    .actions((self) => ({
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
