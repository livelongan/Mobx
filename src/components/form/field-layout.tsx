import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { GridLayout, GridLayoutProps } from '@progress/kendo-react-layout'
import { GAP } from '../../constants'

const Layout = styled(GridLayout)`
    flex: 1;
    padding: ${GAP.large}px;
    padding-top: 0;
    grid-auto-rows: min-content;
`

export const FieldLayout = ({
    children,
    className,
    ...others
}: PropsWithChildren<GridLayoutProps>) => {
    const cls = `field-layout ${className ?? ''}`.trim()
    return (
        <Layout {...others} className={cls} gap={{ cols: GAP.middle, rows: 0 }}>
            {children}
        </Layout>
    )
}