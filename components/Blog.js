import React from 'react'

function Blog({ title, hashtags }) {
  return (
    <div className='container w-full h-full mx-auto my-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='m-2 transition-all duration-200 transform border rounded-lg cursor-pointer card bg-darkShade border-opacity-80 border-darkTint hover:shadow-md hover:border-opacity-0 hover:-translate-y-2'>
          <div className='m-3'>
            <h2 className='mb-2 text-lg font-semibold text-blue-50'>, sit amet consectetur adipisicing elit. Vel aliquam pariatur quis fugiat voluptas dolore.</h2>
            <p className='font-mono text-sm font-light transition-all duration-200 text-secondaryText hover:text-gray-900'>#web #react #node</p>
          </div>
        </div>

        <div className='m-2 transition-all duration-200 transform border rounded-lg cursor-pointer card bg-darkShade border-opacity-80 border-darkTint hover:shadow-md hover:border-opacity-0 hover:-translate-y-2'>
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
        </div>
      </div>
    </div>
  )
}

export default Blog
