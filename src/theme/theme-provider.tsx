import { FunctionComponent, memo, PropsWithChildren } from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { Theme } from './types'

export const ThemeProvider: FunctionComponent<
    PropsWithChildren<{
        theme: Theme
    }>
> = memo(({ theme, children }) => {
    return <Provider theme={theme}>{children}</Provider>
})
