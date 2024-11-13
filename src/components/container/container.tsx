import { useNavigate } from 'react-router-dom'
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Avatar,
    Drawer,
    DrawerContent,
    DrawerSelectEvent,
} from '@progress/kendo-react-layout'
import { Button } from '@progress/kendo-react-buttons'
import * as svgIcons from '@progress/kendo-svg-icons'
import { useState } from 'react'

export const DrawerRouterContainer = (props) => {
    const navigate = useNavigate()
    const [expanded, setExpanded] = useState(true)
    const [selected, setSelected] = useState([])
    const handleClick = () => {
        setExpanded(!expanded)
    }
    const onSelect = (event: DrawerSelectEvent) => {
        navigate(event.itemTarget.props.route)
        // setSelected(event.itemIndex)
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

            <Drawer
                expanded={expanded}
                mode="push"
                position="start"
                mini={true}
                items={items.map((item, index) => ({
                    ...item,
                    selected: index === selected,
                }))}
                onSelect={onSelect}
            >
                <DrawerContent>
                    {items.map((item) => {
                        return (
                            item.selected && (
                                <div className="content" id={item.text}>
                                    {props.children}
                                </div>
                            )
                        )
                    })}
                </DrawerContent>
            </Drawer>
            <style>{`
              .header { padding: 20px; text-align: center; }
              .content { padding: 40px 20px; }
              `}</style>
        </>
    )
}
