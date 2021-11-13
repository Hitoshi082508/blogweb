import React from 'react'
import styled from 'styled-components'
type Styling = {}
type Props = {
  className?: string
  src: string
}
export const FCWorkImage: React.FC<Props & Styling> = ({ className, src }) => {
  return (
    <div className={className}>
      <img src={src} />
    </div>
  )
}
export const WorkImage = styled(FCWorkImage)`
  width: 480px;
  height: 300px;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  img {
    height: 300px;
    width: auto;
  }
`