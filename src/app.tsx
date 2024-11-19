import { observer } from 'mobx-react-lite'

import { useRef } from 'react'
import './app.css'
import { ErrorBoundary, NotificationGroup, NotificationGroupHandle } from './components'
import { RootStoreProvider, useStores } from './stores'
import { RootRouter } from './routers'
import { createTheme, GlobalStyles, Palette, ThemeProvider } from '@mui/material'
import { ThemeSettings, DarkPalette, LightPalette } from './theme'

export const App = observer(() => {
    const notificationRef = useRef<NotificationGroupHandle>(null)
    const rootStore = useStores()
    const { baseStore } = useStores()

    const darkTheme = createTheme({
        ...ThemeSettings,
        palette: { ...DarkPalette } as Palette,
        components: {
            MuiDivider: {
                styleOverrides: {
                    root: {
                        // borderColor: InitBorderColor(baseStore.theme),
                    },
                },
            },
        },
    })

    const lightTheme = createTheme({
        ...ThemeSettings,
        palette: { ...LightPalette } as Palette,
        components: {
            MuiDivider: {
                styleOverrides: {
                    root: {
                        // borderColor: InitBorderColor(baseStore.theme),
                    },
                },
            },
        },
    })

    return (
        <ThemeProvider theme={baseStore.theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles
                styles={{
                    [`*`]: {
                        // borderColor: InitBorderColor(baseStore.theme),
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
