import { SnapshotOut, types } from 'mobx-state-tree'

export const LoadingModel = types.model('LoadingModel').props({
    query: types.maybe(types.boolean),
    view: types.maybe(types.boolean),
    save: types.maybe(types.boolean),
    delete: types.maybe(types.boolean),
})

export const EntityModel = types
    .model('EntityModel')
    .props({
        load: LoadingModel,
    })
    .views((self) => ({
        get querying() {
            return self.load.query
        },
    }))
    .actions((self) => ({
        setQuerying() {
            self.load.query = true
        },
    }))

export type LoadingType = SnapshotOut<typeof LoadingModel>

export type EntityType = SnapshotOut<typeof EntityModel>
