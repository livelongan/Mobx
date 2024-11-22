import { Theme } from '@emotion/react'
import { PaletteMode, Components, CssVarsTheme, SimplePaletteColorOptions } from '@mui/material'
import { FIELD_HEIGHT, DISABLED_SCROLL, ENABLE_SCROLL, GAP } from '../constants'
import { DarkPalette } from './dark'
import { LightPalette } from './light'

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
                    padding: `0 ${GAP.normal}px`,
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
