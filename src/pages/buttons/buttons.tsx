import { observer } from 'mobx-react-lite'
import { Checkbox } from '@progress/kendo-react-inputs'
import { useState } from 'react'
import { Button, ButtonProps } from '@progress/kendo-react-buttons'
import { StackLayout } from '@progress/kendo-react-layout'

const modes: Array<ButtonProps['fillMode']> = ['solid', 'outline', 'link', 'flat', 'clear']

const colors: Array<ButtonProps['themeColor']> = [
    'primary',
    'base',
    'secondary',
    'tertiary',
    'info',
    'success',
    'warning',
    'error',
    'dark',
    'light',
    'inverse',
]

export const Buttons = observer(() => {
    const [disabled, setDisabled] = useState(false)

    const handleChange = () => {
        setDisabled(!disabled)
    }

    return (
        <StackLayout gap={20} orientation={'vertical'}>
            <StackLayout>
                <Checkbox label={'Disabled'} onChange={handleChange} />
            </StackLayout>
            {colors.map((color) => (
                <StackLayout gap={20} key={color}>
                    {modes.map((mode) => (
                        <Button
                            themeColor={color}
                            fillMode={mode}
                            rounded={null}
                            key={mode}
                            disabled={disabled}
                        >
                            {mode} {color}
                        </Button>
                    ))}
                </StackLayout>
            ))}
        </StackLayout>
    )
})
