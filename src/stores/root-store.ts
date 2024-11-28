import { types, getRoot, SnapshotOut, IAnyStateTreeNode, Instance } from 'mobx-state-tree'
import { UserProfileStoreModel } from './user-profile'
import { EntityStoreModel } from './entity'
import { BaseStoreModel } from './base'
import { ProjectStoreModel } from './project'

export const RootStoreModel = types.model('RootStoreModel').props({
    baseStore: BaseStoreModel,
    entityStore: EntityStoreModel,
    userProfileStore: UserProfileStoreModel,

    projectStore: ProjectStoreModel,
})

export type RootStore = Instance<typeof RootStoreModel>

export type RootStoreType = SnapshotOut<typeof RootStoreModel>

export const getRootStore = (target: IAnyStateTreeNode) => {
    return getRoot(target) as RootStore
}
