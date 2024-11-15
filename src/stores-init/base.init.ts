import { BaseStoreType } from '../stores'
import { InitTheme } from '../theme'

export const InitBaseStore: BaseStoreType = {
    notifications: null,
    collapse: false,
    expandIds: [],
    route: undefined,
    theme: InitTheme,
}
