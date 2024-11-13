import { types } from 'mobx-state-tree'
import { EntityStoreModel } from '../common'

export const UserProfileModel = EntityStoreModel.named('UserProfileModel').props({
    userName: types.string,
})
