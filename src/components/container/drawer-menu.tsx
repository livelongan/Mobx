import { useNavigate } from 'react-router-dom'
import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout'
import { PropsWithChildren } from 'react'
import { observer } from 'mobx-react-lite'

type IProps = PropsWithChildren<object>

export const DrawerMenu = observer<IProps>(({ children }) => {
    const navigate = useNavigate()
    // const [expanded, setExpanded] = useState(true)
    // const [selected, setSelected] = useState([])

    const onSelect = (event: DrawerSelectEvent) => {
        navigate(event.itemTarget.props.route)
        // setSelected(event.itemIndex)
    }
    return (
        <Drawer expanded={true} mode="push" position="start" mini={true} items={[]} onSelect={onSelect}>
            <DrawerContent>
                {/* {items.map((item) => {
                    return (
                        item.selected && (
                            <div className="content" id={item.text}>
                                {props.children}
                            </div>
                        )
                    )
                })} */}
                {children}
            </DrawerContent>
        </Drawer>
    )
})
