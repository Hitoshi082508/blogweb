import React from 'react'
import styled from 'styled-components'
type Styling = {}
type Props = {
  className?: string
  paddingBottom?: number
  marginBottom?: number
}
export const FCSpacer: React.FC<Props & Styling> = ({ className }) => {
return <div className={className}></div>
}
export const Spacer = styled(FCSpacer)`
  margin-bottom: ${(props) => props.marginBottom}px;
`