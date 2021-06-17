import React from 'react'
import Layout from '../layouts/Layout'

function KnowMe(props) {
  return (
    <Layout>
      <div className='text-lg sm:text-2xl'>
        <p className=''>
          I am an 18 year old student from India and a self-taught full-stack
          developer. I can also do some Web Designing.{' '}
        </p>
        <p className=''>
          I pickup my skills loitering over the web trying to learn and build
          software products that solve a purpose.{' '}
        </p>
        <br></br>
        <div className='text-2xl font-semibold text-secondary'>
          SKILLS -{' '}
          <span className='text-lg italic font-light sm:text-2xl text-fontColor'>
            ReactJS, NodeJS, MongoDB, Bootstrap, TailwindCSS, WebSockets,
            NextJS, Express, Machine Learning{' '}
          </span>
        </div>
        <br></br>
        <div className=''>
          You can follow me on Twitter where I am quite active in the{' '}
          <i>'TechTwitter'</i> space.
        </div>
        <div>Also, check out my Instagram where I upload my music 🎵 </div>
      </div>
    </Layout>
  )
}

export default KnowMe
