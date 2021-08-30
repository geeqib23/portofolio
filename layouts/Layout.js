import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'
// import ReactComponent from '../public/images/envelop.svg'

function Layout(props) {
  const site = 'https://www.aqibs.me'
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />

        <meta
          name='description'
          content='A portfolio of Aqib Suhail. Updating the progress of projects and summarising key information from what I read online - hopefully providing value.'
        />
        <meta property='og:title' content='Aqib Suhail | Portfolio' />
        <meta
          property='og:description'
          content='A portfolio of Aqib Suhail. Updating the progress of projects and summarising key information from what I read online - hopefully providing value.'
        />
        <meta
          name='image'
          property='og:image'
          content={`${site}/preview.jpg`}
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@geeqib23' />
        <meta name='twitter:title' content='Aqib Suhail | Portfolio' />
        <meta
          name='twitter:description'
          content='A portfolio of Aqib Suhail. Updating the progress of projects and summarising key information from what I read online - hopefully providing value.'
        />
        <meta name='twitter:image' content={`${site}/preview.jpg`} />

        <script type='application/ld+json'>
          {`
                    {
                    "@context":"https://schema.org/",
                    "@type":"Organization",
                    "name":"Aqib Suhail",
                    "image":"${site}/favicon.ico",
                    "logo":"${site}/favicon.ico",
                    "url": "${site}"
                    }
                    `}
        </script>

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        ></link>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        ></link>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        ></link>
        <link rel='manifest' href='/site.webmanifest'></link>
      </Head>
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
                  <a
                    href='https://twitter.com/geeqib23'
                    className='icon-twitter'
                  >
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
                    href='https://www.instagram.com/aqibs_/'
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
                <li>
                  {/* <a
                    href='https://www.linkedin.com/in/aqib-suhail'
                    // className='icon-mail'
                  >
                    <img src={ReactComponent} alt='Mail'></img>
                  </a> */}
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
      </div>
    </main>
  )
}

export default Layout
