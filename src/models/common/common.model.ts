import { types } from 'mobx-state-tree'

export const LoadingModel = types.model('LoadingModel').props({
    query: types.boolean,
    view: types.boolean,
    save: types.boolean,
    delete: types.boolean,
})
