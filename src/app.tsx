import { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { ErrorBoundary, Snackbar, NotificationGroupHandle } from './components'
import { RootStoreProvider, useStores } from './stores'
import { RootRouter } from './routers'
import './app.css'
import { LightCss, DarkCss, ThemeCss, ThemeSettings } from './theme'
import { ThemeProvider } from 'styled-components'

export const App = observer(() => {
    const notificationRef = useRef<NotificationGroupHandle>(null)
    const rootStore = useStores()
    const { baseStore } = useStores()
    console.log(baseStore)
    return (
        <ThemeProvider theme={ThemeSettings}>
            <ErrorBoundary>
                <style>
                    {`
                :root{ 
                    ${ThemeCss} 
                    ${baseStore.theme !== 'dark' ? LightCss : DarkCss} 
                }`}
                </style>
                <RootStoreProvider value={rootStore}>
                    <RootRouter />
                    <Snackbar ref={notificationRef} />
                </RootStoreProvider>
            </ErrorBoundary>
        </ThemeProvider>
    )
})
