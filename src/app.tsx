import { ThemeProvider } from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useRef } from 'react'
import './app.css'
import { Light } from './theme'
import { ErrorBoundary, Container, NotificationGroup, NotificationGroupHandle } from './components'
import { RootStoreProvider } from './stores'

export const App = observer(() => {
    const notificationRef = useRef<NotificationGroupHandle>(null)
    return (
        <ThemeProvider theme={Light}>
            <ErrorBoundary>
                <RootStoreProvider value={{ userProfileStore: null }}>
                    <Container />
                    <NotificationGroup ref={notificationRef} />
                </RootStoreProvider>
            </ErrorBoundary>
        </ThemeProvider>
    )
})
