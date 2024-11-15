import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { Header } from './header'
import styled from '@emotion/styled'
import { MenuRouter } from '../menu'
import { GAP } from '../../constants'

const Root = styled('div')`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const BodyRoot = styled('div')`
    flex: 1;
    display: flex;
`

const PageContainer = styled('div')`
    height: 100%;
    flex: 1;
    overflow: hidden;
    padding: ${GAP.normal}px;
    box-sizing: border-box;
`

type IProps = PropsWithChildren<object>
export const Container = observer<IProps>(({ children }) => {
    return (
        <Root>
            <Header />
            <BodyRoot>
                <MenuRouter />
                <PageContainer className="page">{children}</PageContainer>
            </BodyRoot>
        </Root>
    )
})
