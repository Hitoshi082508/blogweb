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
    <>
      {/* <h1>{posts.posts[0].text}</h1>
      <form action="http://localhost/api/blogs/update" method="post">
        <label>タグ</label>
        <input type="text" name="tag"></input>
        <label>タイトル</label>
        <input type="text" name="title"></input>
        <label>テキスト</label>
        <input type="text" name="text"></input>
        <label>サムネイル</label>
        <input type="text" name="thumbnail"></input>
        <button type="submit">送信する</button>
      </form> */}
      <div>アバウトページ</div>
    </>
  )
}

export default IndexPage
