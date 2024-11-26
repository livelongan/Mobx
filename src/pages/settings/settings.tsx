import { observer } from 'mobx-react-lite'
import { FloatingLabel, Label, Hint, Error } from '@progress/kendo-react-labels'
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs'
import { useState } from 'react'
import { Button } from '@progress/kendo-react-buttons'
import { StackLayout } from '@progress/kendo-react-layout'
export const Settings = observer(() => {
    const [value, setValue] = useState<string | undefined>(undefined)
    const editorId = 'firstName'

    const handleChange = (event: InputChangeEvent) => {
        setValue(event.value)
    }

    return (
        <div className="row example-wrapper">
            <StackLayout gap={8}>
                <Button themeColor={'primary'} fillMode={'solid'} rounded={'small'}>
                    primary Button
                </Button>
                <Button themeColor={'primary'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button disabled themeColor={'primary'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button disabled themeColor={'primary'} fillMode={'solid'} rounded={'small'}>
                    primary Button
                </Button>
            </StackLayout>
            <br />
            <StackLayout gap={8}>
                <Button themeColor={'base'} fillMode={'solid'} rounded={'small'}>
                    base Button
                </Button>
                <Button themeColor={'base'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button themeColor={'base'} fillMode={'flat'} rounded={'small'}>
                    Button
                </Button>
            </StackLayout>
            <br />
            <StackLayout gap={8}>
                <Button themeColor={'secondary'} fillMode={'solid'} rounded={'small'}>
                    secondary Button
                </Button>
                <Button themeColor={'secondary'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button themeColor={'secondary'} fillMode={'flat'} rounded={'small'}>
                    Button
                </Button>
            </StackLayout>
            <br />
            <StackLayout gap={8}>
                <Button themeColor={'tertiary'} fillMode={'solid'} rounded={'small'}>
                    tertiary Button
                </Button>
                <Button themeColor={'tertiary'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button themeColor={'tertiary'} fillMode={'flat'} rounded={'small'}>
                    Button
                </Button>
            </StackLayout>
            <br />
            <StackLayout gap={8}>
                <Button themeColor={'info'} fillMode={'solid'} rounded={'small'}>
                    info Button
                </Button>
                <Button themeColor={'info'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button themeColor={'info'} fillMode={'flat'} rounded={'small'}>
                    Button
                </Button>
            </StackLayout>
            <br />
            <StackLayout gap={8}>
                <Button themeColor={'success'} fillMode={'solid'} rounded={'small'}>
                    success Button
                </Button>
                <Button themeColor={'success'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button themeColor={'success'} fillMode={'flat'} rounded={'small'}>
                    Button
                </Button>
            </StackLayout>
            <br />
            <StackLayout gap={8}>
                <Button themeColor={'warning'} fillMode={'solid'} rounded={'small'}>
                    warning Button
                </Button>
                <Button themeColor={'warning'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button themeColor={'warning'} fillMode={'flat'} rounded={'small'}>
                    Button
                </Button>
            </StackLayout>
            <br />
            <StackLayout gap={8}>
                <Button themeColor={'error'} fillMode={'solid'} rounded={'small'}>
                    error Button
                </Button>
                <Button themeColor={'error'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button themeColor={'error'} fillMode={'flat'} rounded={'small'}>
                    Button
                </Button>
            </StackLayout>
            <br />
            <StackLayout gap={8}>
                <Button themeColor={'dark'} fillMode={'solid'} rounded={'small'}>
                    dark Button
                </Button>
                <Button themeColor={'dark'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button themeColor={'dark'} fillMode={'flat'} rounded={'small'}>
                    Button
                </Button>
            </StackLayout>
            <br />
            <StackLayout gap={8}>
                <Button themeColor={'light'} fillMode={'solid'} rounded={'small'}>
                    light Button
                </Button>
                <Button themeColor={'light'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button themeColor={'light'} fillMode={'flat'} rounded={'small'}>
                    Button
                </Button>
            </StackLayout>
            <br />
            <StackLayout gap={8}>
                <Button themeColor={'inverse'} fillMode={'solid'} rounded={'small'}>
                    inverse Button
                </Button>
                <Button themeColor={'inverse'} fillMode={'outline'} rounded={'small'}>
                    Button
                </Button>
                <Button themeColor={'inverse'} fillMode={'flat'} rounded={'small'}>
                    Button
                </Button>
            </StackLayout>

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
