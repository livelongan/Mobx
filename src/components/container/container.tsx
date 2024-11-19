import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { Header } from './header'
import { MenuRouter } from '../menu'
import { GAP } from '../../constants'
import { Paper, styled } from '@mui/material'

const Root = styled('div')(
    () => `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,
)

const BodyRoot = styled(Paper)(
    ({ theme }) => `
    flex: 1;
    display: flex;
    // background-color: ${theme.palette.background.paper};
`,
)

const PageContainer = styled('div')(
    () => `
    height: 100%;
    flex: 1;
    overflow: hidden;
    padding: ${GAP.normal}px;
    box-sizing: border-box;
`,
)

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
