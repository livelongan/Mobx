import { RouteItemProps } from '../components'
import { ReactPage, UserProfile, Settings, SheetPage, Copy } from '../pages'

export const RouterMenu: RouteItemProps[] = [
    {
        path: '/ReactPage',
        text: 'ReactPage',
        component: <ReactPage />,
    },
    {
        path: '/SheetPage',
        text: 'Sheet Page',
        component: <SheetPage />,
    },
    { separator: true },
    {
        path: '/UserProfile',
        text: 'User Profile',
        component: <UserProfile />,
        hidden: true,
    },
    {
        path: '/',
        text: 'User Profile',
        component: <UserProfile />,
    },
    {
        path: '/Settings',
        text: 'Settings',
        component: <Settings />,
    },
    { separator: true },
    {
        path: '/Copy',
        text: 'Copy',
        component: <Copy />,
    },
]
