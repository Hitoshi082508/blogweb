import React from 'react'
import styled from 'styled-components'
import { GetStaticProps } from 'next'
//component
import { FirstView } from 'src/components/organisms/FirstView'
import { Profile } from 'src/components/organisms/Profile'
import { Work } from 'src/components/templates/Work'
import { Contact } from 'src/components/templates/Contact'
import { Footer } from 'src/components/templates/Footer'
//other
import { getBlogContents } from 'src/contentful'

export const getStaticProps: GetStaticProps = async () => {
  const response = await getBlogContents();
  return {
    props: { posts: response.items || [] },
  };
};

type Props = {
  className?: string
  posts: any[]
}

const IndexBase: React.FC<Props> = ({ className, posts }) => {
  return (
    <div className={className}>
      <img src="logo.png" className={`${className}__logo`} />
      <FirstView />
      <Profile />
      <Work posts={posts}/>
      <Contact />
      <Footer />
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
    top: 25px;
    left: 25px;
    z-index: 9999;
    ${({ theme }) => theme.media.sp`
      top: 10px;
      left: 10px;
    `}
  }
`
export default Index;