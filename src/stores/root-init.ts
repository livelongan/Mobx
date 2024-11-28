import {
    InitBaseStore,
    InitEntityStore,
    InitUserProfileStore,
    InitProjectStore,
} from '../stores-init'
import { RootStoreType } from './root-store'

export const InitRoot: RootStoreType = {
    baseStore: InitBaseStore,
    entityStore: InitEntityStore,
    userProfileStore: InitUserProfileStore,
    projectStore: InitProjectStore,
}
