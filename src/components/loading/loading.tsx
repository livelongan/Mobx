import { observer } from 'mobx-react-lite'
import { styled } from 'styled-components'

const Root = styled('div')(() => ``)
export const Loading = observer(() => {
    return (
        <Root>
            <div className="k-loading-mask">
                <div className="k-loading-text" />
                <div className="k-loading-image" />
                <div className="k-loading-color" />
            </div>
        </Root>
    )
})
