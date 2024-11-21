import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { Header } from './header'
import { MenuRouter } from '../menu'
import { GAP } from '../../constants'
import { Box, styled } from '@mui/material'

const Root = styled('div')(
    () => `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,
)

const BodyRoot = styled(Box)(
    () => `
    flex: 1;
    display: flex;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
`,
)

const PageContainer = styled(Box)(
    ({ theme }) => `
    height: 100%;
    flex: 1;
    padding: ${GAP.middle}px ${GAP.large}px;
    box-sizing: border-box;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
    background-color: ${theme.palette.background.paper}
`,
)

type IProps = PropsWithChildren<object>
export const Container = observer<IProps>(({ children }) => {
    return (
        <Root>
            <Header />
            <BodyRoot>
                <MenuRouter />
                <PageContainer className="page-container">{children}</PageContainer>
            </BodyRoot>
        </Root>
    )
})
