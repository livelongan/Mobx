import { types } from 'mobx-state-tree'

export const BaseModel = types
    .model('BaseModel')
    .props({
        notifications: types.null,
    })
    .views(() => ({}))
    .actions(() => ({}))
