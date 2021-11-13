import React from 'react'
import styled from 'styled-components'
import { WorkCard } from 'src/components/organisms/WorkCard'
import { Title } from 'src/components/atoms/Title'
type Props = {
  className?: string
}
export const FCWork: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Work" />
      <div className={`${className}__container`}>
        <div className={`${className}__box`}>
          <WorkCard labelText="Webデザイン" companyName="株式会社Wakrak" skillText="React Native、PHP" />
          <WorkCard labelText="Webデザイン" companyName="株式会社Wakrak" skillText="React Native、PHP" />
          <WorkCard labelText="Webデザイン" companyName="株式会社Wakrak" skillText="React Native、PHP" />
          <WorkCard labelText="Webデザイン" companyName="株式会社Wakrak" skillText="React Native、PHP" />
          <WorkCard labelText="Webデザイン" companyName="株式会社Wakrak" skillText="React Native、PHP" />
          <WorkCard labelText="Webデザイン" companyName="株式会社Wakrak" skillText="React Native、PHP" />
        </div>
      </div>
    </div>
  )
}
export const Work = styled(FCWork)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  ${({ theme }) => theme.media.sp`
    margin-bottom: 55px;
  `}
  &__container {
    width: 97%;
    background-color: #FFF;
    border-radius: 46px;
    display: flex;
    justify-content: center;
    padding: 160px 0 65px 0;
    ${({ theme }) => theme.media.sp`
      padding: 75px 0 15px 0;
    `}
  }
  &__box {
    width: 1235px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`