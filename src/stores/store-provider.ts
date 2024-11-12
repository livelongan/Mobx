import { createContext } from 'react'

export type RootStore = { useProfile: null }

export const StoreContext = createContext<RootStore>({ useProfile: null })

export const RootStoreProvider = StoreContext.Provider
