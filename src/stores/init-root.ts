import { InitBaseStore, InitEntityStore, InitUserProfileStore } from '../stores-init'
import { RootStoreType } from './root-store'

export const InitRoot: RootStoreType = {
    baseStore: InitBaseStore,
    entityStore: InitEntityStore,
    userProfileStore: InitUserProfileStore,
}
