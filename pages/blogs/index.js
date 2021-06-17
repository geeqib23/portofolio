import React from 'react'
import Layout from '../../layouts/Layout'
import Blog from '../../components/Blog'
import { getPosts } from '../../api/index'

function BlogList(props) {
  return (
    <Layout title='Aqib Suhail | Blogs'>
      <Blog posts={props.posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: {
      posts: posts,
    },
  }
}
export default BlogList
