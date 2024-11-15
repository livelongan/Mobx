import { types } from 'mobx-state-tree'

export const UserProfileModel = types.model('UserProfileModel').props({
    userName: types.string,
})
