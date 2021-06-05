import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'

function Layout(props) {
  return (
    <div className='grid w-screen h-full grid-rows-3 '>
      <div className='flex items-center justify-center w-screen h-full bg-dark border-primary'>
        <div className='flex flex-col items-center justify-center h-1/2'>
          <div className='my-4 mb-3 text-5xl font-cursive text-primary'>Hey, I am Aqib.</div>
          <div>
            <ul className='social-networks bounce'>
              <li>
                <a href='https://twitter.com/geeqib23' className='icon-twitter'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='https://github.com/geeqib23' className='icon-github'>
                  GitHub
                </a>
              </li>
              <li>
                <a href='https://instagram.com' className='icon-instagram'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/' className='icon-linkedin'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-screen h-full row-span-2 bg-darkBlack'>
        <Navbar />
        <div className='flex items-center justify-center w-11/12 mt-9'>{props.children}</div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
