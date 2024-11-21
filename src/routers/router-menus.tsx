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
            {
                path: '/react1',
                text: 'Menu 1',
                component: <ReactPage />,
            },
            {
                path: '/javascript2',
                text: 'Javascript',
                component: <ReactPage />,
            },
            {
                path: '/typescript3',
                text: 'Typescript',
                component: <ReactPage />,
            },
        ],
    },
    {
        path: '/web2',
        text: 'Web 2',
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
            {
                path: '/react1',
                text: 'Menu 1',
                component: <ReactPage />,
            },
            {
                path: '/javascript2',
                text: 'Javascript',
                component: <ReactPage />,
            },
            {
                path: '/typescript3',
                text: 'Typescript',
                component: <ReactPage />,
            },
        ],
    },
    {
        path: '/web3',
        text: 'Web 3',
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
            {
                path: '/react1',
                text: 'Menu 1',
                component: <ReactPage />,
            },
            {
                path: '/javascript2',
                text: 'Javascript',
                component: <ReactPage />,
            },
            {
                path: '/typescript3',
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
