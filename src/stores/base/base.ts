import { cast, SnapshotOut, types } from 'mobx-state-tree'
import { MenuItemProps, NotificationDto, StoreModalProps } from '../../components'
import { NOTIFICATION_COUNT } from '../../constants'
import { PaletteMode } from '../../theme'

export const BaseStoreModel = types
    .model('BaseStoreModel')
    .props({
        theme: types.frozen<PaletteMode>(),
        route: types.maybe(types.frozen<MenuItemProps>()),
        notifications: types.array(types.frozen<NotificationDto>()),
        modals: types.array(types.frozen<StoreModalProps>()),
        modalResized: types.maybe(types.frozen<boolean>()),
        modalStaged: types.maybe(types.frozen<boolean>()),
        expandIds: types.array(types.string),
        collapse: types.boolean,
        menuWidth: types.number,
        menuDragging: types.boolean,
    })
    .views((self) => ({
        get expandedIds() {
            return self.expandIds.toJSON()
        },
    }))
    .actions((self) => ({
        setTheme(theme: PaletteMode) {
            self.theme = theme
        },
        setCollapse(collapse: boolean) {
            self.collapse = collapse
        },
        setMenuWidth(width: number) {
            self.menuWidth = width
        },
        setMenuDragging(dragging: boolean) {
            self.menuDragging = dragging
        },
        setRoute(route: MenuItemProps | undefined) {
            self.route = route
        },
        setExpandedId(ids: string[]) {
            self.expandIds = cast(ids)
        },
        addModal(id: string, modal: StoreModalProps['modal']) {
            self.modalResized = !self.modalResized
            const has = self.modals.findIndex((it) => it.id === id)
            if (has >= 0) {
                self.modals.splice(has, 1)
            }
            self.modals.push({ id, modal })
        },
        changeModalStage() {
            self.modalStaged = !self.modalStaged
        },
        findModal(id: string | null): StoreModalProps['modal'] | null {
            if (!id) {
                return null
            }
            const has = self.modals.find((it) => it.id === id)
            return has?.modal ?? null
        },
        delModal(id: string) {
            const has = self.modals.findIndex((it) => it.id === id)
            if (has >= 0) {
                self.modals.splice(has, 1)
            }
        },
        addNotifications(dto: NotificationDto) {
            const data = [...self.notifications]
            if (data.length > NOTIFICATION_COUNT - 1) {
                data.splice(0, 1)
            }
            data.push({ ...dto })
            self.notifications = cast(data)
        },
        delNotifications(id: string) {
            const index = self.notifications.findIndex((it) => it.id === id)
            if (index >= 0) {
                self.notifications.splice(index, 1)
            }
        },
    }))

export type BaseStoreType = SnapshotOut<typeof BaseStoreModel>
