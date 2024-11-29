import { MENU_WIDTH } from '../constants'
import { BaseStoreType } from '../stores'
import { InitTheme } from '../theme'

export const InitBaseStore: BaseStoreType = {
    notifications: [],
    collapse: true,
    menuDragging: false,
    menuWidth: MENU_WIDTH,
    expandIds: [],
    route: undefined,
    theme: InitTheme,
    modals: [],
    modalChanged: false,
}
