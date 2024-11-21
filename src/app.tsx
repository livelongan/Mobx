import { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { ErrorBoundary, NotificationGroup, NotificationGroupHandle } from './components'
import { RootStoreProvider, useStores } from './stores'
import { RootRouter } from './routers'
import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material'
import { ThemeSettings, DarkPalette, LightPalette, getComponents, getGlobalStyles } from './theme'
import './app.css'

export const App = observer(() => {
    const notificationRef = useRef<NotificationGroupHandle>(null)
    const rootStore = useStores()
    const { baseStore } = useStores()

    const darkTheme = createTheme({
        ...ThemeSettings,
        palette: { ...DarkPalette },
        components: getComponents('dark'),
    })

    const lightTheme = createTheme({
        ...ThemeSettings,
        palette: { ...LightPalette },
        components: getComponents('light'),
    })

    const theme = baseStore.theme === 'dark' ? darkTheme : lightTheme

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles styles={getGlobalStyles(theme)} />
            <ErrorBoundary>
                <RootStoreProvider value={rootStore}>
                    <RootRouter />
                    <NotificationGroup ref={notificationRef} />
                </RootStoreProvider>
            </ErrorBoundary>
        </ThemeProvider>
    )
})
