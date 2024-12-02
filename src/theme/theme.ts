import { LightPalette } from './light'
import { Border, Elevation } from './others'
import { PaletteMode, Theme } from './types'

export const InitTheme: PaletteMode = 'light'

export const InitBorderRadius = 0

export const ThemeSettings: Theme = {
    palette: LightPalette,
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
            shortest: '150ms',
            shorter: '200ms',
            short: '250ms',
            // most basic recommended timing
            standard: '300ms',
            // this is to be used in complex animations
            complex: '375ms',
            // recommended when something is entering screen
            enteringScreen: '225ms',
            // recommended when something is leaving screen
            leavingScreen: '195ms',
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
        handler: 999999,
    },
}

export const ThemeCss = `
    ${Elevation}
    ${Border}
`
