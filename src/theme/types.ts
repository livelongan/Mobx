/* eslint-disable @typescript-eslint/naming-convention */
export type PaletteMode = 'light' | 'dark'

export type CommonColors = {
    black: string
    white: string
}
export type TypeBackground = {
    default: string
    paper: string
}

export type PaletteColorOptions = {
    light?: string
    main: string
    dark?: string
    contrastText?: string
}

export type TypeAction = {
    active: string
    hover: string
    hoverOpacity: number
    selected: string
    selectedOpacity: number
    disabled: string
    disabledOpacity: number
    disabledBackground: string
    focus: string
    focusOpacity: number
    activatedOpacity: number
}

export type PaletteOptions = {
    primary?: PaletteColorOptions
    secondary?: PaletteColorOptions
    error?: PaletteColorOptions
    warning?: PaletteColorOptions
    info?: PaletteColorOptions
    success?: PaletteColorOptions
    mode?: PaletteMode
    common?: Partial<CommonColors>
    divider?: string
    action?: Partial<TypeAction>
    background?: Partial<TypeBackground>
    var: { [key: string]: string }
}

export type ZIndex = {
    mobileStepper: number
    speedDial: number
    appBar: number
    drawer: number
    modal: number
    snackbar: number
    tooltip: number
    fab: number
    handler: number
}
export type Easing = {
    easeInOut: string
    easeOut: string
    easeIn: string
    sharp: string
}

export type Duration = {
    shortest: number
    shorter: number
    short: number
    standard: number
    complex: number
    enteringScreen: number
    leavingScreen: number
}

export type Theme = {
    palette: PaletteOptions
    // shadows?: Shadows
    spacing: number
    transitions: {
        easing: Easing
        duration: Duration
    }
    zIndex: ZIndex
}
