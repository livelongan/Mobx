import { Button, ButtonProps } from '@progress/kendo-react-buttons'
import { observer } from 'mobx-react-lite'
import { styled } from 'styled-components'

const Root = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

type IProps = ButtonProps & {
    width?: number
    height?: number
}

export const HeaderIcon = observer<IProps>(({ width = 40, height = 40, ...others }) => {
    return (
        <Root
            style={{
                width,
                height,
            }}
        >
            <Button {...others} themeColor={'light'} fillMode={'clear'} rounded={'full'} />
        </Root>
    )
})
