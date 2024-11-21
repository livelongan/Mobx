import { Components, CssVarsTheme, PaletteMode, SimplePaletteColorOptions, Theme, ThemeOptions } from '@mui/material'
import { DarkPalette } from './dark'
import { LightPalette } from './light'
import { DISABLED_SCROLL, ENABLE_SCROLL, FIELD_HEIGHT } from '../constants'

export const InitTheme: PaletteMode = 'light'

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

const INPUT_PADDING = {
    x: 14,
    y: 12,
}

export const getComponents = (theme: PaletteMode): Components<Omit<Theme, 'getComponents' | 'palette'> & CssVarsTheme> => {
    const palette = theme === 'dark' ? DarkPalette : LightPalette
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    ['& .MuiSvgIcon-root']: {
                        color: palette.text?.secondary,
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                asterisk: {
                    color: (palette.error as SimplePaletteColorOptions).main,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    transform: `translate(${INPUT_PADDING.x}px, ${INPUT_PADDING.y}px) scale(1)`,
                    backgroundColor: palette.background?.paper,
                    padding: '0 4px',
                    ['&.Mui-focused']: {
                        color: palette.action?.active,
                    },
                },
                shrink: {
                    transform: `translate(${INPUT_PADDING.x}px, ${INPUT_PADDING.y - 20}px) scale(0.8)`,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: `${INPUT_PADDING.x}px ${INPUT_PADDING.y}px`,
                    height: 'inherit',
                    boxSizing: 'inherit',
                },
                root: {
                    height: `${FIELD_HEIGHT}px`,
                    boxSizing: 'border-box',
                    ['&.Mui-focused .MuiOutlinedInput-notchedOutline']: {
                        borderWidth: '1px',
                    },
                },
            },
        },
        MuiSelect: {
            defaultProps: {
                MenuProps: {
                    classes: {
                        paper: DISABLED_SCROLL,
                        list: ENABLE_SCROLL,
                    },
                },
            },
            styleOverrides: {
                root: {
                    height: `${FIELD_HEIGHT}px`,
                    boxSizing: 'border-box',
                },
                select: {
                    height: 'inherit',
                    boxSizing: 'inherit',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: `${INPUT_PADDING.x - 1}px ${INPUT_PADDING.y + 6}px`,
                    height: `${FIELD_HEIGHT}px`,
                    boxSizing: 'border-box',
                },
            },
        },
    }
}
