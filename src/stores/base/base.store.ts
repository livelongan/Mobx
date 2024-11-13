import { types } from 'mobx-state-tree'

export const BaseStoreModel = types
    .model('BaseStoreModel')
    .props({
        notifications: types.null,
    })
    .views(() => ({}))
    .actions(() => ({}))
