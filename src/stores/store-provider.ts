import { createContext } from 'react'
import { RootStore } from './root-store'
import { InitRootStore } from './init-store'

export const StoreContext = createContext<RootStore>(InitRootStore)

export const RootStoreProvider = StoreContext.Provider
