import React from 'react'
import styled from 'styled-components'
type Styling = {}
type Props = {
  className?: string
  text: string
}
export const FCTitle: React.FC<Props & Styling> = ({ className, text }) => {
  return <div className={className}>{text}</div>
}
export const Title = styled(FCTitle)`
  font-size: 100px;
  font-weight: bold;
  color: #FFF;
  margin-bottom: -25px;
`