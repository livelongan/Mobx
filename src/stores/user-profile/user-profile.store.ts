import { SnapshotOut, types } from 'mobx-state-tree'

export const UserProfileStoreModel = types
    .model('UserProfileStoreModel')
    .props({
        notifications: types.null,
    })
    .views(() => ({}))
    .actions(() => ({}))

export type UserProfileStoreType = SnapshotOut<typeof UserProfileStoreModel>
