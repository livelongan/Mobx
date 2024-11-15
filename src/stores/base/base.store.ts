import { cast, SnapshotOut, types } from 'mobx-state-tree'

export const BaseStoreModel = types
    .model('BaseStoreModel')
    .props({
        collapse: types.boolean,
        expandIds: types.array(types.string),
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
        setExpandedId(ids: string[]) {
            self.expandIds = cast(ids)
        },
    }))

export type BaseStoreType = SnapshotOut<typeof BaseStoreModel>
