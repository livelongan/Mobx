import { observer } from 'mobx-react-lite'
import { Spreadsheet } from '@progress/kendo-react-spreadsheet'
import { sheets } from './shared-sp-sheet'

export const SheetPage = observer(() => {
    return (
        <Spreadsheet
            style={{
                width: '100%',
                height: 680,
            }}
            defaultProps={{ sheets }}
        />
    )
})
