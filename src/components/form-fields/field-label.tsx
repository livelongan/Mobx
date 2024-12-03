import { styled } from 'styled-components'
import { Label, LabelProps } from '@progress/kendo-react-labels'

export type FieldLabelProps = LabelProps & {
    label?: string
    required?: boolean
}

const Root = styled(Label)`
    overflow: hidden;
`
const RootText = styled.span`
    text-overflow: ellipsis;
    margin: 0 2px;
`
const Required = styled.span`
    font-weight: normal;
    margin-left: 4px;
`
export const FieldLabel = (props: FieldLabelProps) => {
    const { label, required, className = '', ...others } = props
    return (
        <Root className={`${className}`.trim()} {...others}>
            <RootText title={label}>{label}</RootText>
            <Required>{required ? '*' : ''}</Required>
        </Root>
    )
}
