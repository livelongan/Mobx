import { SnapshotOut, types } from 'mobx-state-tree'

export const EntityStoreModel = types
    .model('EntityStoreModel')
    .props({
        notifications: types.null,
    })
    .views(() => ({}))
    .actions(() => ({}))

export type EntityStoreType = SnapshotOut<typeof EntityStoreModel>
