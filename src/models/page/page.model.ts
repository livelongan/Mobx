import { types } from 'mobx-state-tree'
import { LoadingModel } from '../common'

export const BaseStoreModel = types
    .model('BaseStoreModel')
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
