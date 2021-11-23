import React from 'react'
import styled from 'styled-components'
type Styling = {}
type Props = {
  className?: string
}
const FCDetailBase: React.FC<Props & Styling> = ({ className }) => {
return <div className={className}>DetailBase</div>
}
export const DetailBase = styled(FCDetailBase)``

export default DetailBase;