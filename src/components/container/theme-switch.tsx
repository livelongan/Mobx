import { styled, Switch } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { moon, sun } from './path'
import { useStores } from '../../stores'

const svgGenerate = (path: string) => {
    return `url('data:image/svg+xml;utf8,
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24">
        <g fill="${encodeURIComponent('#d6c81c')}">
            <path d = "${path}"/>
        </g>
    </svg>')`.replace(/[\t\r\n]/g, '')
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    [`& .MuiSwitch-switchBase`]: {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        [`&.Mui-checked`]: {
            transform: 'translateX(22px)',
            [`& .MuiSwitch-thumb:before`]: {
                backgroundImage: `${svgGenerate(sun)}`,
            },
            [`& + .MuiSwitch-track`]: {
                opacity: 1,
                backgroundColor: theme.palette.background.default,
                ...theme.applyStyles('dark', {
                    backgroundColor: theme.palette.background.default,
                }),
            },
        },
    },
    [`& .MuiSwitch-thumb`]: {
        backgroundColor: '#001e3c',
        width: 32,
        height: 32,
        [`&::before`]: {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `${svgGenerate(moon)}`,
        },
        ...theme.applyStyles('dark', {
            backgroundColor: '#003892',
        }),
    },
    [`& .MuiSwitch-track`]: {
        opacity: 1,
        backgroundColor: theme.palette.background.default,
        borderRadius: 20 / 2,
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.background.default,
        }),
    },
}))

export const ThemeSwitch = observer(() => {
    const { baseStore } = useStores()
    const handleTheme = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        baseStore.setTheme(checked ? 'light' : 'dark')
    }

    return <MaterialUISwitch sx={{ m: 1 }} checked={baseStore.theme === 'light'} onChange={handleTheme} />
})