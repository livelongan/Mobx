import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import { GridLayoutItem, GridLayoutItemProps } from '@progress/kendo-react-layout'

const Layout = styled(GridLayoutItem)(() => ``)

export const FieldLayoutItem = ({
    children,
    className,
    ...others
}: PropsWithChildren<GridLayoutItemProps>) => {
    const cls = `field-layout-item ${className ?? ''}`.trim()
    return (
        <Layout {...others} className={cls}>
            {children}
        </Layout>
    )
}
