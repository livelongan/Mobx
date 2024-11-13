import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout'
import { Button } from '@progress/kendo-react-buttons'
import * as svgIcons from '@progress/kendo-svg-icons'
import { DrawerMenu } from './drawer-menu'
import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'

type IProps = PropsWithChildren<object>

export const Container = observer<IProps>(({ children }) => {
    const handleClick = () => {
        console.log(1)
    }
    return (
        <>
            <AppBar>
                <AppBarSection>
                    <Button svgIcon={svgIcons.layoutIcon} fillMode="flat" onClick={handleClick} />
                </AppBarSection>

                <AppBarSection>
                    <h1 className="title">AppBar expanding Drawer component</h1>
                </AppBarSection>

                <AppBarSpacer />
            </AppBar>

            <DrawerMenu>{children}</DrawerMenu>
        </>
    )
})
