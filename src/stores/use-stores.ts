import { useContext } from 'react'
import { RootStore, StoreContext } from './store-provider'

export const useStores = (): RootStore => {
    return useContext(StoreContext)
}
