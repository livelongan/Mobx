import { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { Snackbar, NotificationGroupHandle, ErrorBoundary } from './components'
import { RootStoreProvider, useStores } from './stores'
import { RootRouter } from './routers'
import './app.css'
import { LightColor, DarkColor, ThemeCss, ThemeSettings, ThemeProvider } from './theme'

export const App = observer(() => {
    const notificationRef = useRef<NotificationGroupHandle>(null)
    const rootStore = useStores()
    const { baseStore } = useStores()
    return (
        <ErrorBoundary>
            <ThemeProvider theme={ThemeSettings}>
                <style>
                    {`
                :root{ 
                    ${baseStore.theme !== 'dark' ? LightColor : DarkColor} 
                    ${ThemeCss}
                }`}
                </style>
                <RootStoreProvider value={rootStore}>
                    <RootRouter />
                    <Snackbar ref={notificationRef} />
                </RootStoreProvider>
            </ThemeProvider>
        </ErrorBoundary>
    )
})
