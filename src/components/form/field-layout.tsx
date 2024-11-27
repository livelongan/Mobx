import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { GridLayout, GridLayoutProps } from '@progress/kendo-react-layout'
import { GAP } from '../../constants'

const Layout = styled(GridLayout)(() => ``)

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
