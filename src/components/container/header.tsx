import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { Mail, Menu, Notifications, AccountCircle, More } from '@mui/icons-material'
import { MenuIconWrap } from './menu-icon-wrap'
import styled from '@emotion/styled'

const Root = styled(AppBar)`
    box-shadow: unset;
    padding-left: 0;
    & .MuiToolbar-root {
        padding-left: 0;
    }
`

type IProps = PropsWithChildren<{
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>

export const Header = observer<IProps>(({ open, setOpen }) => {
    const handleDrawer = () => {
        setOpen(!open)
    }
    return (
        <Root className="header" position="static" color={'secondary'} enableColorOnDark>
            <Toolbar>
                <MenuIconWrap color="inherit" aria-label="open drawer" onClick={handleDrawer}>
                    <Menu />
                </MenuIconWrap>
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
            </Toolbar>
        </Root>
    )
})
