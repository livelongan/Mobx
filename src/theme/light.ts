import { PaletteOptions } from '@mui/material'

export const LightPalette: PaletteOptions = {
    mode: 'light',
    primary: {
        main: '#002884',
        contrastText: '#fafafa',
    },
    secondary: {
        main: '#f50057',
    },
    background: {
        default: '#ffffff',
        paper: '#fafafa',
    },
    text: {
        primary: '#1a1a1a',
        disabled: 'rgba(173,173,173,1)',
        secondary: 'rgba(43,43,43,0.6)',
    },
    error: {
        main: '#c30f0f',
    },
    warning: {
        main: '#de6b09',
    },
    info: {
        main: '#2da4e2',
    },
    success: {
        main: '#229e27',
    },
    divider: 'rgba(0,0,0,0.12)',
}
