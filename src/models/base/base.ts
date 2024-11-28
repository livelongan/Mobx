import { SnapshotOut, types } from 'mobx-state-tree'

export const BaseModel = types
    .model('BaseModel')
    .props({
        notifications: types.null,
    })
    .views(() => ({}))
    .actions(() => ({}))

export type BaseType = SnapshotOut<typeof BaseModel>
