import { ThemeProvider } from 'styled-components'
import { observer } from 'mobx-react-lite'

import './app.css'
import { Light } from './theme'

export const App = observer(() => {
    return <ThemeProvider theme={Light}>Root</ThemeProvider>
})
