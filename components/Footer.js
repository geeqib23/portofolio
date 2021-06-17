import React from 'react'
import Link from 'next/link'

function Footer(props) {
  return (
    <div className=' w-full mt-5 flex flex-col justify-center items-center bg-dark shadow-2xl'>
      <div className='m-4'>
        <ul className='inline-flex'>
          <li>
            <Link href='/projects' passHref>
              <a className='footer'>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/blogs' passHref>
              <a className='footer'>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href='/' passHref>
              <a className='footer'>KnowMe</a>
            </Link>
          </li>
        </ul>
      </div>
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
  )
}

export default Footer
