import { observer } from 'mobx-react-lite'
import { MenuItemProps } from './types'
import { Box, styled, Typography } from '@mui/material'
import { MenuItemIcon } from './menu-item-icon'
import { KeyboardArrowDownOutlined, TextSnippetOutlined } from '@mui/icons-material'
import { useStores } from '../../stores'
import { useMemo } from 'react'
import { GAP } from '../../constants'
import { ModePalette } from '../../theme'

const Root = styled(Box)(
    ({ theme }) => `
    display: flex;
    align-items: center;
    width: auto;
    &.selected {
        box-shadow: 4px 0px 0px 0px ${ModePalette(theme, 'secondary')} inset;
    }
`,
)

const LabelWrapper = styled(Box)`
    flex: 1;
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &.hidden {
        width: 0;
        padding: 0;
    }
    & .MuiTypography-root {
        flex: 1;
    }
    & .MuiSvgIcon-root {
        margin-right: ${GAP.normal}px;
    }
`

export const MenuItem = observer<MenuItemProps>((props) => {
    const { text, id } = props
    const { children = [] } = props
    const { baseStore } = useStores()

    const collapsed = useMemo(() => baseStore.collapse, [baseStore.collapse])
    const route = useMemo(() => baseStore.route, [baseStore.route])

    return (
        <Root className={`menu-wrapper ${route?.id === id ? 'selected' : ''}`.trim()}>
            <MenuItemIcon color="inherit">
                <TextSnippetOutlined />
            </MenuItemIcon>
            <LabelWrapper className={!collapsed ? 'hidden' : ''}>
                <Typography component="span">{text}</Typography>
                {children.length > 0 ? <KeyboardArrowDownOutlined /> : null}
            </LabelWrapper>
        </Root>
    )
})
