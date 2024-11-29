import { PATTERN } from '../constants'
import { PaletteOptions } from './types'

export const DarkPalette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#83c3f7',
        contrastText: '#adadad',
    },
    secondary: {
        main: '#c70048',
    },
    background: {
        default: '#16161c',
        paper: '#1A2023',
    },
    error: {
        main: '#cb0000',
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
    divider: 'rgba(255,255,255,0.12)',
    var: {},
}

export const DarkColor = `
    --scroll-color: rgba(255,255,255,0.4);
    --color-overlay: rgba(255,255,255,0.3);
    --color-hover: rgba(0,0,0,0.1);

    --kendo-color-app-surface: #232a2f;
    --kendo-color-on-app-surface: #bdbdbd;
    --kendo-color-subtle: #666666;
    --kendo-color-surface: #313131;
    --kendo-color-surface-alt: #1a2023;
    --kendo-color-border: rgba(255, 255, 255, 0.1);
    --kendo-color-border-alt: rgba(0, 0, 0, 0.2);

    --kendo-color-base-subtle: #ebebeb;
    --kendo-color-base-subtle-hover: #e0e0e0;
    --kendo-color-base-subtle-active: #d6d6d6;
    --kendo-color-base: #2f2f2f;
    --kendo-color-base-hover: #434343;
    --kendo-color-base-active: #d6d6d6;
    --kendo-color-base-emphasis: #c2c2c2;
    --kendo-color-base-on-subtle: #3d3d3d;
    --kendo-color-on-base: #bdbdbd;
    --kendo-color-base-on-surface: #3d3d3d;

    --kendo-color-primary-subtle: #ffeceb;
    --kendo-color-primary-subtle-hover: #ffdedb;
    --kendo-color-primary-subtle-active: #ffc8c4;
    --kendo-color-primary: #ff6358;
    --kendo-color-primary-hover: #ea5a51;
    --kendo-color-primary-active: #d45349;
    --kendo-color-primary-emphasis: #ff9d97;
    --kendo-color-primary-on-subtle: #5c201c;
    --kendo-color-on-primary: #ffffff;
    --kendo-color-primary-on-surface: #ff6358; 

    --kendo-color-info-subtle: #d2e2fb;
    --kendo-color-info-subtle-hover: #bdd4f8;
    --kendo-color-info-subtle-active: #80acf4;
    --kendo-color-info: #0058e9;
    --kendo-color-info-hover: #0052d6;
    --kendo-color-info-active: #004ac2;
    --kendo-color-info-emphasis: #6098f2;
    --kendo-color-info-on-subtle: #002259;
    --kendo-color-on-info: #ffffff;
    --kendo-color-info-on-surface: #004ac2;

    --kendo-color-success-subtle: #dcf0d3;
    --kendo-color-success-subtle-hover: #cbe9bf;
    --kendo-color-success-subtle-active: #b7e1a5;
    --kendo-color-success: #37b400;
    --kendo-color-success-hover: #32a500;
    --kendo-color-success-active: #2d9600;
    --kendo-color-success-emphasis: #81d15f;
    --kendo-color-success-on-subtle: #1c5a00;
    --kendo-color-on-success: #ffffff;
    --kendo-color-success-on-surface: #2d9600;

    --kendo-color-warning-subtle: #fff4d3;
    --kendo-color-warning-subtle-hover: #ffeebd;
    --kendo-color-warning-subtle-active: #ffe79e;
    --kendo-color-warning: #ffc000;
    --kendo-color-warning-hover: #eaaf00;
    --kendo-color-warning-active: #d49f00;
    --kendo-color-warning-emphasis: #ffd760;
    --kendo-color-warning-on-subtle: #5e4700;
    --kendo-color-on-warning: #3d3d3d;
    --kendo-color-warning-on-surface: #ffc000;

    --kendo-color-error-subtle: #fcddda;
    --kendo-color-error-subtle-hover: #fbc8c3;
    --kendo-color-error-subtle-active: #f98b80;
    --kendo-color-error: #f31700;
    --kendo-color-error-hover: #df1600;
    --kendo-color-error-active: #ca1400;
    --kendo-color-error-emphasis: #f76f60;
    --kendo-color-error-on-subtle: #7a0c00;
    --kendo-color-on-error: #ffffff;
    --kendo-color-error-on-surface: #ca1400;

    --kendo-color-light-subtle: #fafafa;
    --kendo-color-light-subtle-hover: #f5f5f5;
    --kendo-color-light-subtle-active: #ebebeb;
    --kendo-color-light: #2e353a;
    --kendo-color-light-hover: #e0e0e0;
    --kendo-color-light-active: #d6d6d6;
    --kendo-color-light-emphasis: #d6d6d6;
    --kendo-color-light-on-subtle: #141414;
    --kendo-color-on-light: #000000;
    --kendo-color-light-on-surface: #e0e0e0;

    --kendo-color-dark-subtle: #c2c2c2;
    --kendo-color-dark-subtle-hover: #adadad;
    --kendo-color-dark-subtle-active: #999999;
    --kendo-color-dark: #3d3d3d;
    --kendo-color-dark-hover: #292929;
    --kendo-color-dark-active: #1f1f1f;
    --kendo-color-dark-emphasis: #666666;
    --kendo-color-dark-on-subtle: #1f1f1f;
    --kendo-color-on-dark: #ffffff;
    --kendo-color-dark-on-surface: #141414; 
`

DarkColor.replace(PATTERN.enter, '')
    .replace(PATTERN.spaces, '')
    .split(';')
    .forEach((it) => {
        const split = it.split(':')
        DarkPalette.var[split[0]] = split[1]
    })
