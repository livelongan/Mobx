import { observer } from 'mobx-react-lite'
import { PropsWithChildren, useState } from 'react'
import { CollapseMenu } from './collapse-menu'
import { Header } from './header'
import styled from '@emotion/styled'

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
    width: 100%;
`

type IProps = PropsWithChildren<object>
export const Container = observer<IProps>(({ children }) => {
    const [open, setOpen] = useState(false)
    return (
        <Root>
            <Header open={open} setOpen={setOpen} />
            <BodyRoot>
                <CollapseMenu open={open} setOpen={setOpen}>
                    {children}
                </CollapseMenu>
                <PageContainer className="page">{children}</PageContainer>
            </BodyRoot>
        </Root>
    )
})
