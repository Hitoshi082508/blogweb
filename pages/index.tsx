import React from 'react'
import styled from 'styled-components'
import { FirstView } from '../src/components/organisms/FirstView'
//component

type Props = {
  className?: string
}

const IndexBase: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <img src="logo.png" />
      <FirstView />
    </div>
  )
}

const Index = styled(IndexBase)`
  background: transparent linear-gradient(180deg, #4594D7 0%, #94D0E9 100%) 0% 0% no-repeat padding-box;
  img {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    position: fixed;
    top: 2%;
    left: 2%;
  }
`
export default Index