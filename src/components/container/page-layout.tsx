import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { GridLayout } from '@progress/kendo-react-layout'
import { PAGE_SUFFIX } from '../../constants'

const Root = styled(GridLayout)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    min-height: 0;
`

type IProps = PropsWithChildren<{ id: string }>
export const PageLayout = observer<IProps>(({ id, children }) => {
    return (
        <Root className="page-layout" id={`${id}${PAGE_SUFFIX}`} data-page={id}>
            {children}
        </Root>
    )
})
