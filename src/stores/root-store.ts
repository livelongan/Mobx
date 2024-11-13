import { types, getRoot, SnapshotOut, IAnyStateTreeNode, Instance } from 'mobx-state-tree'

export const RootStoreModel = types.model('RootStoreModel').props({
    userProfileStore: types.null,
})
export type RootStore = Instance<typeof RootStoreModel>
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>

export const getRootStore = (target: IAnyStateTreeNode) => {
    return getRoot(target) as RootStore
}
