import { observer } from 'mobx-react-lite'
import { Route, Routes } from 'react-router-dom'
import { Authorization } from './401'

export const MainRouter = observer(() => {
    return (
        <Routes>
            <Route key="authorization" path="/401" element={<Authorization />} />
        </Routes>
    )
})
