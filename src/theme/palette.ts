import { PaletteOptions } from '@mui/material'

export const Palette: PaletteOptions = {
    primary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#ffffff',
    },
    secondary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#ffffff',
    },
    error: {
        light: '#dc5e5e',
        main: '#ff4141',
        dark: '#ac2323',
        contrastText: '#ffffff',
    },
    warning: {
        light: '#d6c81c',
        main: '#b09c0d',
        dark: '#917600',
        contrastText: '#ffffff',
    },
    info: {
        light: '#1faeb9',
        main: '#1d99a0',
        dark: '#17615f',
        contrastText: '#ffffff',
    },
    success: {
        light: '#42c22d',
        main: '#369625',
        dark: '#1d8320',
        contrastText: '#ffffff',
    },
    grey: {
        [50]: '#fafafa',
        [100]: '#f5f5f5',
        [200]: '#eeeeee',
        [300]: '#e0e0e0',
        [400]: '#bdbdbd',
        [500]: '#9e9e9e',
        [600]: '#757575',
        [700]: '#616161',
        [800]: '#424242',
        [900]: '#212121',
        A100: '#f5f5f5',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
    },
    divider: 'rgba(0,0,0,0.12)',
    background: {
        default: '#fafafa',
        paper: '#fafafa',
    },
}
