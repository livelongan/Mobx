import { CircularProgress, Stack, styled } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { LOADING_SIZE } from '../../constants'
const StackLayout = styled(Stack)(
    () => `
    height: 100%;
    justify-content: center;
    align-items: center;
`,
)
export const Loading = observer(() => {
    return (
        <StackLayout>
            <CircularProgress size={LOADING_SIZE} />
        </StackLayout>
    )
})
