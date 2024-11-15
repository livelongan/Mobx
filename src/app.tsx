import { observer } from 'mobx-react-lite'

import { useRef } from 'react'
import './app.css'
import { ErrorBoundary, NotificationGroup, NotificationGroupHandle } from './components'
import { RootStoreProvider, useStores } from './stores'
import { RootRouter } from './routers'
import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material'
import { InitBorderColor, InitTheme, ThemeSettings } from './theme'

export const App = observer(() => {
    const notificationRef = useRef<NotificationGroupHandle>(null)
    const rootStore = useStores()
    const { baseStore } = useStores()

    const theme = createTheme({
        ...ThemeSettings,
        palette: { ...ThemeSettings.palette, mode: baseStore.theme },
        colorSchemes: {
            dark: InitTheme === 'dark',
        },
    })

    return (
        <ThemeProvider theme={theme} defaultMode={InitTheme}>
            <GlobalStyles
                styles={{
                    [`*`]: {
                        borderColor: InitBorderColor(theme),
                    },
                }}
            />
            <ErrorBoundary>
                <RootStoreProvider value={rootStore}>
                    <RootRouter />
                    <NotificationGroup ref={notificationRef} />
                </RootStoreProvider>
            </ErrorBoundary>
        </ThemeProvider>
    )
})
