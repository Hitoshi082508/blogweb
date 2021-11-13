import React from 'react'
import styled from 'styled-components'
import { GetStaticProps } from 'next'
//component
import { FirstView } from '../src/components/organisms/FirstView'
import { Profile } from '../src/components/organisms/Profile'

type Props = {
  className?: string
}

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await fetch('http://localhost/api/contact')
//     .then(response => response.json())
//   return {
//     props: { contacts: data }
//   };
// }

const IndexBase: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <img src="logo.png" className={`${className}__logo`} />
      <FirstView />
      <Profile />
      {/* <form action="http://localhost/api/contact/create" method="post">
        <label>名前</label>
        <input type="text" name="name"></input>
        <label>電話番号</label>
        <input type="tel" name="tel"></input>
        <label>メールアドレス</label>
        <input type="text" name="email"></input>
        <label>お問い合わせ内容</label>
        <input type="text" name="text"></input>
        <button type="submit">送信する</button>
      </form> */}
      {/* <h1>{contacts.map((contact) => contact.name)}</h1> */}
    </div>
  )
}

const Index = styled(IndexBase)`
  background: transparent linear-gradient(180deg, #4594D7 0%, #94D0E9 100%) 0% 0% no-repeat padding-box;
  &__logo {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    position: fixed;
    top: 2%;
    left: 2%;
  }
`
export default Index;