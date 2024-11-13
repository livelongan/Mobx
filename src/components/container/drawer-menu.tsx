import { useNavigate } from 'react-router-dom'
import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout'
import { useState } from 'react'

export const DrawerMenus = (props) => {
    const navigate = useNavigate()
    const [expanded, setExpanded] = useState(true)
    const [selected, setSelected] = useState([])

    const onSelect = (event: DrawerSelectEvent) => {
        navigate(event.itemTarget.props.route)
        // setSelected(event.itemIndex)
    }
    return (
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
    )
}
