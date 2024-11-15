import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { Mail, MenuOpenOutlined, Notifications, AccountCircle, More, MenuOutlined } from '@mui/icons-material'
import styled from '@emotion/styled'
import { useStores } from '../../stores'
import { MenuItemIcon } from '../menu'

const Root = styled(AppBar)`
    box-shadow: unset;
    padding-left: 0;
    & .MuiToolbar-root {
        padding-left: 0;
    }
`
const ToolbarRoot = styled(Toolbar)`
    @media (min-width: 600px) {
        min-height: 48px;
    }

    @media (min-width: 0px) {
        @media (orientation: landscape) {
            min-height: 48px;
        }
    }
`
type IProps = PropsWithChildren<object>

export const Header = observer<IProps>(() => {
    const { baseStore } = useStores()
    const handleCollapseMenu = () => {
        baseStore.setCollapse(!baseStore.collapse)
    }
    return (
        <Root className="header" position="static" color={'secondary'} enableColorOnDark>
            <ToolbarRoot>
                <MenuItemIcon color="inherit" aria-label="open drawer" onClick={handleCollapseMenu}>
                    {baseStore.collapse ? <MenuOpenOutlined /> : <MenuOutlined />}
                </MenuItemIcon>
                <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                    Mobx
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <Mail />
                        </Badge>
                    </IconButton>
                    <IconButton size="small" aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="error">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="small"
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="small"
                        aria-label="show more"
                        // aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <More />
                    </IconButton>
                </Box>
            </ToolbarRoot>
        </Root>
    )
})
