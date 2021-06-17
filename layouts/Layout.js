import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'

function Layout(props) {
  return (
    <div className='grid w-screen h-screen grid-rows-3 '>
      <div className='flex items-center justify-center w-screen h-full bg-dark border-primary'>
        <div className='flex flex-col items-center justify-center h-1/2'>
          <div className='my-4 mb-3 text-primary'>
            <span className='font-mono text-2xl sm:text-3xl '>
              👋 Hey! I am{' '}
            </span>{' '}
            <span className='block text-4xl sm:text-6xl text-center font-cursive sm:inline'>
              {' '}
              Aqib Suhail
            </span>
          </div>
          <br></br>
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
                <a
                  href='https://www.instagram.com/aqib_._/'
                  className='icon-instagram'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/aqib-suhail'
                  className='icon-linkedin'
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-screen h-full row-span-2 bg-darkBlack'>
        <Navbar />
        <div className='flex items-center justify-center w-11/12 mt-9'>
          {props.children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
