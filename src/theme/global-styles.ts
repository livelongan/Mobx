import { GlobalStylesProps, Theme } from '@mui/material'
import { DISABLED_SCROLL, ENABLE_SCROLL, MENU_LIST_HEIGHT, SCROLL_OFFSET } from '../constants'

export const getGlobalStyles = (theme: Theme): GlobalStylesProps['styles'] => ({
    body: {
        scrollbarColor: `${theme.palette.divider} ${theme.palette.background.paper}`,
    },
    [`.${ENABLE_SCROLL}`]: {
        paddingTop: `${SCROLL_OFFSET}px !important`,
        paddingBottom: `${SCROLL_OFFSET}px !important`,
        marginTop: `${-SCROLL_OFFSET}px !important`,
        marginBottom: `${-SCROLL_OFFSET}px !important`,
        overflow: 'hidden',
        overflowY: 'overlay !important',
    },
    [`.${DISABLED_SCROLL}`]: {
        overflow: 'hidden !important',
    },
    [`.MuiMenu-paper .MuiList-root`]: {
        maxHeight: `${MENU_LIST_HEIGHT}px`,
    },
})
