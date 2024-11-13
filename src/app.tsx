import { observer } from 'mobx-react-lite'

import { useRef } from 'react'
import './app.css'
// import { Light } from './theme'
import { ErrorBoundary, NotificationGroup, NotificationGroupHandle } from './components'
import { RootStoreProvider } from './stores'
import { RootRouter } from './routers'
// import { ThemeProvider } from '@mui/material'

export const App = observer(() => {
    const notificationRef = useRef<NotificationGroupHandle>(null)
    return (
        // <ThemeProvider theme={Light}>
        <ErrorBoundary>
            <RootStoreProvider value={{ userProfileStore: null }}>
                <RootRouter />
                <NotificationGroup ref={notificationRef} />
            </RootStoreProvider>
        </ErrorBoundary>
        // </ThemeProvider>
    )
})
