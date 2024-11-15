import { useEffect, useState } from 'react'
import { RootStoreModel, RootStoreType } from './root-store'
import { InitRoot } from './init-root'

type InitRoot = { rootStore: RootStoreType }

export const InitRootStore = RootStoreModel.create({
    ...InitRoot,
})
const initial = (): InitRoot => {
    return { rootStore: InitRootStore }
}

export const useInitStore = () => {
    const [initResult, setInitResult] = useState<InitRoot | undefined>()

    useEffect(() => {
        const { rootStore } = initial()
        setInitResult({ rootStore })
    }, [])

    return initResult
}
