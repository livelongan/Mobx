import { useContext } from 'react'
import { StoreContext } from './store-provider'
import { RootStore } from './root-store'

export const useStores = (): RootStore => {
    return useContext(StoreContext)
}
