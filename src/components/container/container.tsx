import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { Header } from './header'
import { MenuRouter } from '../menu'
import { styled } from 'styled-components'

const Root = styled('div')(
    () => `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,
)

type IProps = PropsWithChildren<object>
export const Container = observer<IProps>(({ children }) => {
    return (
        <Root>
            <Header />
            <MenuRouter>{children}</MenuRouter>
        </Root>
    )
})
