import { types } from 'mobx-state-tree'

export const LoadingModel = types.model('LoadingModel').props({
    query: types.boolean,
    view: types.boolean,
    save: types.boolean,
    delete: types.boolean,
})

export const EntityStoreModel = types
    .model('EntityStoreModel')
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
