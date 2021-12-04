import React from 'react'
import styled from 'styled-components'
type Styling = {}
type Props = {
  className?: string
  imageFirst: string
  imageSecond: string
  imageThird: string
}
export const FCImageList: React.FC<Props & Styling> = ({ className, imageFirst, imageSecond, imageThird }) => {
return (
    <div className={className}>
      <div>
        <img src={imageFirst} />
      </div>
      <img src={imageSecond} />
      <img src={imageThird} />
    </div>
  )
}
export const ImageList = styled(FCImageList)``