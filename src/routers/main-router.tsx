import { observer } from 'mobx-react-lite'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Authorization } from './401'
import { useRoutes } from './use-routes'
import { Suspense, useEffect } from 'react'
import { useStores } from '../stores'
import { RouterError } from './router-error'
import { Loading } from '../components'
import { NotFound } from './404'

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
        <Suspense fallback={<Loading />}>
            <Routes>
                {routers.map((it) => {
                    if (it.component && it.path) {
                        return (
                            <Route
                                key={it.id}
                                path={it.path}
                                element={it.component}
                                ErrorBoundary={RouterError}
                            />
                        )
                    } else {
                        return null
                    }
                })}
                <Route key="authorization" path="/401" element={<Authorization />} />
                <Route key="notFound" path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
})
