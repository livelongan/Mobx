import { observer } from 'mobx-react-lite'
import { FloatingLabel, Label, Hint, Error } from '@progress/kendo-react-labels'
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs'
import { useState } from 'react'
export const Settings = observer(() => {
    const [value, setValue] = useState<string | undefined>(undefined)
    const editorId = 'firstName'

    const handleChange = (event: InputChangeEvent) => {
        setValue(event.value)
    }

    return (
        <div className="row example-wrapper">
            <div className="col-12 col-md-6 example-col">
                <FloatingLabel label={'First Name:'} editorId={editorId} editorValue={value}>
                    <Input id={editorId} value={value} onChange={handleChange} />
                </FloatingLabel>
            </div>
            <div className="col-12 col-md-6 example-col">
                <Label editorId={editorId}>First Name:&nbsp;</Label>
                <Input id={editorId} value={value} onChange={handleChange} />
            </div>
            <div className="col-12 col-md-6 example-col">
                <Input
                    id={editorId}
                    value={value}
                    ariaDescribedBy={'firstNameHint'}
                    onChange={handleChange}
                />
                <Hint id={'firstNameHint'}>e.g.: Peter</Hint>
            </div>
            <div className="col-12 col-md-6 example-col">
                <Input
                    id={editorId}
                    value={value}
                    ariaDescribedBy={'firstNameError'}
                    onChange={handleChange}
                />
                {!value && <Error id={'firstNameError'}>This field is required.</Error>}
            </div>
        </div>
    )
})
