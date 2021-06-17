import React from 'react'
import BlogLayout from '../../layouts/BlogLayout'
import { getPostBySlug, getPosts } from '../../api/index'
import Schema from '../../components/Schema'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../components/CodeBlock'
import Image from '../../components/Image'

function Post(props) {
  // console.log(props)
  return (
    <>
      <Schema post={props} />
      <BlogLayout
        title={props.title}
        date={props.date}
        description={props.description}
      >
        <div className='prose'>
          <ReactMarkdown
            children={props.content}
            renderers={{ code: CodeBlock, image: Image }}
          />
        </div>
      </BlogLayout>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: await getPostBySlug(context.params.slug),
  }
}

export async function getStaticPaths() {
  let paths = await getPosts()
  paths = paths.map(post => ({
    params: { slug: post.slug },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}

export default Post
