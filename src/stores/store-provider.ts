import { createContext } from 'react'
import { RootStore } from './root-store'

export const StoreContext = createContext<RootStore>({ userProfileStore: null })

export const RootStoreProvider = StoreContext.Provider
