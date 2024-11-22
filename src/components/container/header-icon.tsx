import { Button, ButtonProps } from '@progress/kendo-react-buttons'
import { observer } from 'mobx-react-lite'
import { styled } from 'styled-components'

const Root = styled('div')(
    () => ` 
    display: flex;
    justify-content: center;
    align-items: center;
    & .k-button {
        padding: 8px;
        border-radius: 50%;
    }
`,
)

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
            <Button {...others} fillMode="flat" />
        </Root>
    )
})
