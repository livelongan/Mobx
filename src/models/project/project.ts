import { SnapshotOut, types } from 'mobx-state-tree'

export const ProjectModel = types.model('ProjectModel').props({
    id: types.string,
    name: types.string,
    age: types.string,
    layout: types.string,
    handle: types.string,
    work: types.string,
    togo: types.string,
    school: types.string,
    use: types.string,
})

export type ProjectType = SnapshotOut<typeof ProjectModel>
