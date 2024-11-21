import { AppBar, Badge, Box, styled, Toolbar, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { Mail, MenuOpenOutlined, Notifications, AccountCircle, MenuOutlined, MoreHorizOutlined } from '@mui/icons-material'
import { useStores } from '../../stores'
import { HeaderIcon } from './header-icon'
import { ThemeSwitch } from './theme-switch'
import { MENU_ICON_HEIGHT, MENU_ICON_WIDTH } from '../../constants'

const Root = styled(AppBar)(
    () => `
    box-shadow: unset;
    padding-left: 0;
    & .MuiToolbar-root {
        padding: 0;
    }
`,
)

const ToolbarRoot = styled(Toolbar)(
    () => `
    @media (min-width: 600px) {
        min-height: 48px;
    }

    @media (min-width: 0px) {
        @media (orientation: landscape) {
            min-height: 48px;
        }
    }
`,
)

type IProps = PropsWithChildren<object>

export const Header = observer<IProps>(() => {
    const { baseStore } = useStores()
    const handleCollapseMenu = () => {
        baseStore.setCollapse(!baseStore.collapse)
    }
    return (
        <Root className="header" position="static">
            <ToolbarRoot>
                <HeaderIcon width={MENU_ICON_WIDTH} height={MENU_ICON_HEIGHT} onClick={handleCollapseMenu}>
                    {baseStore.collapse ? <MenuOpenOutlined /> : <MenuOutlined />}
                </HeaderIcon>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                    }}
                >
                    Mobx
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <HeaderIcon>
                        <Badge badgeContent={4} color="error">
                            <Mail />
                        </Badge>
                    </HeaderIcon>
                    <HeaderIcon>
                        <Badge badgeContent={17} color="error">
                            <Notifications />
                        </Badge>
                    </HeaderIcon>
                    <HeaderIcon edge="end">
                        <AccountCircle />
                    </HeaderIcon>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <HeaderIcon>
                        <MoreHorizOutlined />
                    </HeaderIcon>
                </Box>
                <Box sx={{ display: { xs: 'flex' } }}>
                    <ThemeSwitch />
                </Box>
            </ToolbarRoot>
        </Root>
    )
})
