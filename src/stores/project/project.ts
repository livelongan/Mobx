import { SnapshotOut, types } from 'mobx-state-tree'
import { ProjectModel } from '../../models'

export const ProjectStoreModel = types
    .model('ProjectStoreModel')
    .props({
        sources: types.array(ProjectModel),
    })
    .views(() => ({}))
    .actions(() => ({}))

export type ProjectStoreType = SnapshotOut<typeof ProjectStoreModel>
