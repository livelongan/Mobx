import { SnapshotOut, types } from 'mobx-state-tree'

export const ProjectStoreModel = types
    .model('ProjectStoreModel')
    .props({
        // notifications: types.null,
    })
    .views(() => ({}))
    .actions(() => ({}))

export type ProjectStoreType = SnapshotOut<typeof ProjectStoreModel>
