import { PaletteMode, Theme, ThemeOptions } from '@mui/material'

export const InitTheme: PaletteMode = 'dark'

export const InitBorderRadius = 0

export const ThemeSettings: ThemeOptions = {
    shape: {
        borderRadius: InitBorderRadius,
    },
    spacing: 8,
    transitions: {
        easing: {
            // This is the most common easing curve.
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            // Objects enter the screen at full velocity from off-screen and
            // slowly decelerate to a resting point.
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            // Objects leave the screen at full velocity. They do not decelerate when off-screen.
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            // The sharp curve is used by objects that may return to the screen at any time.
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            // most basic recommended timing
            standard: 300,
            // this is to be used in complex animations
            complex: 375,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
        },
    },
    zIndex: {
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
        fab: 1050,
    },
}

export const ModePalette = (theme: Theme, key: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success') =>
    theme.palette[key][theme.palette.mode]

export const colors = {
    header: {
        light: '#eeeeee',
        dark: '#9e9e9e',
    },
    menuSelected: {
        light: '#002884',
        dark: '#90caf9',
    },
}
