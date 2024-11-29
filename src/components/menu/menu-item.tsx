import { DrawerItem, DrawerItemProps } from '@progress/kendo-react-layout'
import { SvgIcon } from '@progress/kendo-react-common'
import { fileIcon } from '@progress/kendo-svg-icons'
import { styled } from 'styled-components'

const Root = styled.div`
    display: flex;
`
export const MenuItem = (props: DrawerItemProps) => {
    const { text } = props
    return (
        <DrawerItem {...props} title={text}>
            <SvgIcon icon={fileIcon} />
            <Root>
                <div>{text}</div>
            </Root>
        </DrawerItem>
    )
}
