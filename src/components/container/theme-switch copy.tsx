import { observer } from 'mobx-react-lite'
import { moon, sun } from './path'
import { useStores } from '../../stores'
import { notification } from '../notification'
import { styled } from 'styled-components'
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs'

const svgGenerate = (path: string) => {
    return `url('data:image/svg+xml;utf8,
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24">
        <g fill="${encodeURIComponent('#f2df0d')}">
            <path d = "${path}"/>
        </g>
    </svg>')`.replace(/[\t\r\n]/g, '')
}

const Root = styled(Switch)(({ theme }) => ({
    width: 42,
    height: 30,
    ['& .k-switch-track']: {
        width: 42,
        height: 20,
        color: 'var(--kendo-color-surface)',
        background: 'currentcolor',
        outlineColor: 'currentcolor',
        borderColor: 'currentcolor',
    },
    [`& .k-switch-thumb`]: {
        width: 30,
        height: 30,
        [`&::before`]: {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    [`&.k-switch-on`]: {
        [`& .k-switch-thumb`]: {
            width: 30,
            height: 30,
            borderColor: 'var(--kendo-color-surface)',
            [`&::before`]: {
                backgroundImage: `${svgGenerate(sun)}`,
            },
        },
    },
    [`&.k-switch-off`]: {
        [`& .k-switch-thumb`]: {
            width: 30,
            height: 30,
            [`&::before`]: {
                backgroundImage: `${svgGenerate(moon)}`,
            },
        },
    },
}))

export const ThemeSwitch = observer(() => {
    const { baseStore } = useStores()
    const handleTheme = (event: SwitchChangeEvent) => {
        baseStore.setTheme(event.value ? 'light' : 'dark')
        notification({
            type: 'info',
            message: `Theme now change to ${event.value ? 'light' : 'dark'}.`,
        })
    }

    return (
        <Root
            checked={baseStore.theme === 'light'}
            onChange={handleTheme}
            onLabel={''}
            offLabel={''}
        />
    )
})
