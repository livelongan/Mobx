import { createContext } from 'react'
import { RootStore } from './root-store'
import { InitRootStore } from './strore-init'

export const StoreContext = createContext<RootStore>(InitRootStore)

export const RootStoreProvider = StoreContext.Provider
