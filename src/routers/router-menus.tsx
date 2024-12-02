import { RouteItemProps } from '../components'
import { ReactPage, UserProfile, Buttons, SheetPage, Copy, FormDemo } from '../pages'

export const RouterMenu: RouteItemProps[] = [
    {
        path: '/Form',
        text: 'Form',
        component: <FormDemo />,
    },
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
    {
        path: '/demo',
        text: 'Demo',
        items: [
            {
                path: '/Form',
                text: 'Form',
                component: <FormDemo />,

                items: [
                    {
                        path: '/Form',
                        text: 'Form',
                        component: <FormDemo />,
                    },
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
                ],
            },
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
        ],
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
        path: '/Buttons',
        text: 'Buttons',
        component: <Buttons />,
    },
    { separator: true },
    {
        path: '/Copy',
        text: 'Copy',
        component: <Copy />,
    },
]
