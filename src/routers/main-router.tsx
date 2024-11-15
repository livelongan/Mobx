import { observer } from 'mobx-react-lite'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Authorization } from './401'
import { useRoutes } from './use-routes'
import { useEffect } from 'react'
import { useStores } from '../stores'

export const MainRouter = observer(() => {
    const location = useLocation()
    const navigate = useNavigate()
    const { routers, findRoute } = useRoutes()
    const { baseStore } = useStores()

    useEffect(() => {
        if (location && routers.length > 0) {
            const pathname = location?.pathname ?? '/'
            if (pathname === '/401') {
                navigate('/', { replace: true })
                return
            }
            const route = findRoute(pathname)
            if (route) {
                baseStore.setRoute(route)
            }
        }
    }, [baseStore, findRoute, location, navigate, routers.length])

    return (
        <Routes>
            {routers.map((it) => {
                if (it.component && it.path) {
                    const Component = it.component
                    return <Route key={it.id} path={it.path} element={<Component />} />
                } else {
                    return null
                }
            })}
            <Route key="authorization" path="/401" element={<Authorization />} />
        </Routes>
    )
})
