// import { GetStaticProps } from 'next'

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await fetch('http://localhost/api/blogs')
//     .then(response => response.json())
//   return {
//     props: { posts: data }
//   };
// }

const IndexPage = (posts) => {
  return (
    <h1>{posts.posts[0].text}</h1>
  )
}

export default IndexPage
