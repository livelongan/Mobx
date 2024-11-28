import { SnapshotOut, types } from 'mobx-state-tree'

export const ProjectModel = types.model('ProjectModel').props({
    id: types.string,
})

export type ProjectType = SnapshotOut<typeof ProjectModel>
