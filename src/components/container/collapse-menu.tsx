// import { useNavigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Inbox, Mail } from '@mui/icons-material'
import { MenuIconWrap } from './menu-icon-wrap'
import { MENU_ICON_WIDTH, MENU_WIDTH } from '../../constants'
import styled from '@emotion/styled'

type IProps = PropsWithChildren<{
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>

const CollapseRoot = styled(Collapse)`
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    & .drawer-list {
        box-sizing: border-box;
    }
`

const MenuItem = styled(ListItemButton)`
    padding: 0 ${8}px 0 0 !important;
    box-sizing: border-box;
`

export const CollapseMenu = observer<IProps>(({ open, setOpen }) => {
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }
    const DrawerList = (
        <Box
            sx={{ width: MENU_WIDTH + MENU_ICON_WIDTH }}
            className="drawer-list"
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <MenuItem>
                            <MenuIconWrap>{index % 2 === 0 ? <Inbox /> : <Mail />}</MenuIconWrap>
                            <ListItemText primary={text} />
                        </MenuItem>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <MenuItem>
                            <MenuIconWrap>{index % 2 === 0 ? <Inbox /> : <Mail />}</MenuIconWrap>
                            <ListItemText primary={text} />
                        </MenuItem>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <CollapseRoot
            in={open}
            className="collapse"
            orientation="horizontal"
            collapsedSize={MENU_ICON_WIDTH - 2}
            sx={{ overflow: 'hidden' }}
        >
            {DrawerList}
        </CollapseRoot>
    )
})
