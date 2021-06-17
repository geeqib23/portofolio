import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navbar(props) {
  const router = useRouter()
  // console.log(router.pathname == '/projects' ? ' active' : ' ')
  return (
    <div className='container flex items-center justify-center flex-none w-5/6 px-6 py-2 mx-auto shadow-2xl navbar bg-darkShade rounded-b-3xl'>
      {/* <Link href='/'>
        <div className='text-base md:text-2xl'>geeqib</div>
      </Link> */}
      {/* <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 text-gray-500 border border-gray-600 rounded appearance-none hover:text-gray-800 hover:border-teal-500 focus:outline-none'>
          <svg className='w-3 h-3 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div> */}
      <div>
        <ul className='inline-flex'>
          <li>
            <Link href='/projects' passHref>
              <a
                className={
                  router.pathname == '/projects'
                    ? 'navbarItems active'
                    : 'navbarItems'
                }
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href='/blogs' passHref>
              <a
                className={
                  router.pathname == '/blogs'
                    ? 'navbarItems active'
                    : 'navbarItems'
                }
              >
                Blogs
              </a>
            </Link>
          </li>
          <li>
            <Link href='/' passHref>
              <a
                className={
                  router.pathname == '/' ? 'navbarItems active' : 'navbarItems'
                }
              >
                KnowMe
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
