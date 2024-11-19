import { BaseStoreType } from '../stores'
import { InitTheme } from '../theme'

export const InitBaseStore: BaseStoreType = {
    notifications: [],
    collapse: false,
    expandIds: [],
    route: undefined,
    theme: InitTheme,
}
