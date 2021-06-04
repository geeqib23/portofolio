import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

function Layout(props) {
  return (
    <div className='grid w-screen h-screen grid-rows-3 '>
      <div className='flex items-center justify-center w-screen h-full bg-dark border-primary'>
        <div className='flex flex-col items-center justify-center h-1/2'>
          <div className='my-4 mb-3 text-5xl font-cursive text-primary'>Hey, I am Aqib.</div>
          <div>
            <ul className='social-networks bounce'>
              <li>
                <a href='https://twitter.com/' class='icon-twitter'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='https://github.com' class='icon-github'>
                  GitHub
                </a>
              </li>
              <li>
                <a href='https://instagram.com' class='icon-instagram'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/' class='icon-linkedin'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-screen h-full row-span-2 md:col-span-2 bg-darkBlack'>
        <Navbar />
        <div className='flex items-center justify-center w-11/12 h-5/6'>{props.children}</div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
