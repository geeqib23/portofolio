import React from 'react'
import { useRouter } from 'next/router'

function Blog({ posts }) {
  console.log(posts)
  const router = useRouter()
  return (
    <div className='container w-full h-full mx-auto my-5'>
      <p className='text-lg sm:text-xl'>
        I am a tech-geek and read a lot online. In my blogs and tweets, I will
        try to share with you the insights I have gained from my experiences.{' '}
      </p>
      <br></br>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        {posts.map((post, index) => {
          return (
            <div
              key={index}
              onClick={() => router.push(`/blogs/${post.slug}`)}
              className='m-2 transition-all duration-200 transform rounded-lg cursor-pointer card bg-darkShade border-opacity-80 shadow-md hover:border-opacity-0 hover:-translate-y-2'
            >
              <div className='m-3'>
                <h2 className='mb-2 text-lg font-bold text-fontColor'>
                  {post.title}
                </h2>
                <p className='font-mono text-sm transition-all duration-200 text-secondary font-semibold '>
                  {post.date}
                </p>
                {/* <p className='font-mono text-sm font-light transition-all duration-200 text-secondaryText '>#web #react #node</p> */}
              </div>
            </div>
          )
        })}

        {/* <div className='m-2 transition-all duration-200 transform border rounded-lg cursor-pointer card bg-darkShade border-opacity-80 border-darkTint hover:shadow-md hover:border-opacity-0 hover:-translate-y-2'>
          <div className='m-3'>
            <h2 className='mb-2 text-lg font-semibold text-blue-50'>Lorem ipsum fugiat voluptas dolore.</h2>
            <p className='font-mono text-sm font-light transition-all duration-200 text-secondaryText hover:text-gray-900'>#web #react #node</p>
          </div>
        </div>

        <div className='m-2 transition-all duration-200 transform border rounded-lg cursor-pointer card bg-darkShade border-opacity-80 border-darkTint hover:shadow-md hover:border-opacity-0 hover:-translate-y-2'>
          <div className='m-3'>
            <h2 className='mb-2 text-lg font-semibold text-blue-50'>Lorem Vel aliquam pariatur quis fugiat voluptas dolore.</h2>
            <p className='font-mono text-sm font-light transition-all duration-200 text-secondaryText hover:text-gray-900'>#web #react #node</p>
          </div>
        </div>

        <div className='m-2 transition-all duration-200 transform border rounded-lg cursor-pointer card bg-darkShade border-opacity-80 border-darkTint hover:shadow-md hover:border-opacity-0 hover:-translate-y-2'>
          <div className='m-3'>
            <h2 className='mb-2 text-lg font-semibold text-blue-50'>Lorem ur adipisicing elit. Vel aliquam pariatur quis fugiat voluptas dolore.</h2>
            <p className='font-mono text-sm font-light transition-all duration-200 text-secondaryText hover:text-gray-900'>#web #react #node</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Blog
