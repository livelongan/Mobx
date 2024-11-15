import { observer } from 'mobx-react-lite'
import { MenuItemProps } from './types'
import { Box, Typography } from '@mui/material'
import { MenuItemIcon } from './menu-item-icon'
import { KeyboardArrowDownOutlined, TextSnippetOutlined } from '@mui/icons-material'
import { useStores } from '../../stores'
import { useMemo } from 'react'
import { GAP } from '../../constants'
import styled from '@emotion/styled'

const Root = styled(Box)`
    display: flex;
    align-items: center;
    width: auto;
`

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
    const { children = [] } = props
    const { baseStore } = useStores()

    const collapsed = useMemo(() => baseStore.collapse, [baseStore.collapse])

    const { text } = props

    return (
        <Root className="menu-item">
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
