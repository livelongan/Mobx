import { RouteItemProps } from '../components'
import { ReactPage, UserProfile, Settings } from '../pages'

export const RouterMenu: RouteItemProps[] = [
    {
        path: '/react',
        text: 'Menu 1',
        component: <ReactPage />,
    },
    {
        path: '/javascript',
        text: 'Javascript',
        component: <ReactPage />,
    },
    {
        path: '/typescript',
        text: 'Typescript',
        component: <ReactPage />,
    },
    {
        path: '/web',
        text: 'Web',
        component: <ReactPage />,
        children: [
            {
                path: '/react',
                text: 'Menu 1',
                component: <ReactPage />,
            },
            {
                path: '/javascript',
                text: 'Javascript',
                component: <ReactPage />,
            },
            {
                path: '/typescript',
                text: 'Typescript',
                component: <ReactPage />,
            },
        ],
    },
    { separator: true },
    {
        path: '/html',
        text: 'HTML',
        component: <ReactPage />,
    },
    {
        path: '/css',
        text: 'Css',
        component: <ReactPage />,
    },
    {
        path: '/vue',
        text: 'Vue',
        component: <ReactPage />,
    },
    { separator: true },
    {
        path: '/',
        text: 'User Profile',
        component: <UserProfile />,
    },
    {
        path: '/settings',
        text: 'Settings',
        component: <Settings />,
    },
]
