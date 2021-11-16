import React from 'react'
import styled from 'styled-components'
import { Title } from '../atoms/Title'
type Styling = {}
type Props = {
  className?: string
}
export const FCFooter: React.FC<Props & Styling> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Thank you" />
      <div className={`${className}__container`}>
        Continue when we meet…
      </div>
    </div>
  )
}
export const Footer = styled(FCFooter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__container {
    width: 97%;
    height: 200px;
    font-size: 20px;
    color: #4795D7;
    background-color: #FFF;
    border-radius: 46px 46px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.media.sp`
      height: 100px;
    `}
  }
`