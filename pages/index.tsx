import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const IndexBase: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      トップページ
    </div>
  )
}

const Index = styled(IndexBase)`
`
export default Index