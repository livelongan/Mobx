import { types } from 'mobx-state-tree'

export const UserProfileStoreModel = types
    .model('UserProfileStoreModel')
    .props({
        notifications: types.null,
    })
    .views(() => ({}))
    .actions(() => ({}))
