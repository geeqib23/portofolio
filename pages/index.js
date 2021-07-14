import React from 'react'
import Layout from '../layouts/Layout'

function KnowMe(props) {
  return (
    <Layout title='Aqib Suhail | Portofolio'>
      <div className=' max-w-4xl text-lg sm:text-2xl'>
        <p className=''>
          I am an 18 year old student from India and a self-taught full-stack
          developer. I can also do some Web Designing.{' '}
        </p>
        <p className=''>
          I pickup my skills loitering over the web trying to learn and build or
          contribute to software products that solve a purpose.{' '}
        </p>
        <br></br>
        <div className='font-semibold text-secondary'>
          STACK -{' '}
          <span className=' font-light text-fontColor text-base'>
            (Frameworks/technologies that i have used in past and I am fairly
            comfortable with)
          </span>
        </div>

        <div>
          <span className='inline-block px-1 mx-1  font-semibold  transition-all duration-150 transform text-links italic hover:shadow-sm hover:scale-105'>
            ReactJS
          </span>
          <span className='inline-block px-1 mx-1  font-semibold  transition-all duration-150 transform text-links italic hover:shadow-sm hover:scale-105'>
            NodeJS
          </span>
          <span className='inline-block px-1 mx-1  font-semibold  transition-all duration-150 transform text-links italic hover:shadow-sm hover:scale-105'>
            MongoDB
          </span>
          <span className='inline-block px-1 mx-1  font-semibold  transition-all duration-150 transform text-links italic hover:shadow-sm hover:scale-105'>
            TailwindCSS
          </span>
          <span className='inline-block px-1 mx-1  font-semibold  transition-all duration-150 transform text-links italic hover:shadow-sm hover:scale-105'>
            ExpressJS
          </span>
          <span className='inline-block px-1 mx-1  font-semibold  transition-all duration-150 transform text-links italic hover:shadow-sm hover:scale-105'>
            NextJS
          </span>
          <span className='inline-block px-1 mx-1  font-semibold  transition-all duration-150 transform text-links italic hover:shadow-sm hover:scale-105'>
            Websockets
          </span>
          <span className='inline-block px-1 mx-1  font-semibold  transition-all duration-150 transform text-links italic hover:shadow-sm hover:scale-105'>
            Bootstrap
          </span>
          <span className='inline-block px-1 mx-1  font-semibold  transition-all duration-150 transform text-links italic hover:shadow-sm hover:scale-105'>
            Figma
          </span>
        </div>
        <br></br>
        <div className=''>
          You can reach out to me on Twitter where I am quite active in the{' '}
          <i>'TechTwitter'</i> space.
        </div>
        <div>Also, check out my Instagram where I upload my music :P </div>
      </div>
    </Layout>
  )
}

export default KnowMe
