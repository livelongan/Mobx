import { GAP } from '../constants'

export const DialogModalCss = `
    .k-window-titlebar {
        position: relative;
        padding: 0;
        height: 36px; 
        padding-left: ${GAP.middle}px;
        color: var(--kendo-color-light-on-surface);
        background-color: var(--kendo-color-light);
    }
    .k-window-title {
        padding: 0;
        font-weight: 500;
    }
    .k-window-title:hover {
        cursor: move;
    }
    .k-dialog .k-window-title:hover {
        cursor: default;
    }
    .k-window-titlebar-actions {
        position: absolute;
        right: 0;
        top: 0;
        margin: 0;
        margin-right: 1px;
        margin-top: 1px;
    }
    .k-window-titlebar-actions .k-button {
        border-radius: 0;
        border: none !important;
        box-shadow: none !important;
        height: 35px;
        width: 40px;
        box-sizing: border-box;
    }
    .k-window-titlebar-actions .k-button:hover::before,
    .k-window-titlebar-actions .k-button.k-hover::before {
        opacity: 1;
        background-color: var(--kendo-color-light-hover);
    }
    .k-window-titlebar-actions .k-button:hover,
    .k-window-titlebar-actions .k-button.k-hover {
        color: var(--kendo-color-light);
    }
    .k-window-titlebar-actions .k-button:hover::after {
        box-shadow: none !important;
    }
    .k-window-titlebar-actions .k-button:after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .k-actions {
        gap: ${GAP.large}px;
        padding: ${GAP.XL / 2}px ${GAP.large}px;
        margin-top: ${GAP.normal}px;
        box-shadow: 0 1px inset var(--kendo-color-border);
        border-color:transparent;
    }
        
`
