import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function BlogLayout(props) {
  // console.log(props)
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

      <div className='flex flex-col items-center text-white'>
        <Header />
        <div className=' text-2xl w-full sm:text-4xl sm:w-3/5 text-center text-primary m-1 font-semibold'>
          {props.title}
        </div>
        <div className='text-lg text-secondary m-2 font-mono font-semibold'>
          {props.date}
        </div>
        {/* <div className='text-xl w-3/5 text-center text-gray-300 m-3'>{props.description}</div> */}
        <div className=' h-px bg-secondaryLight w-11/12 m-5'></div>
        {props.children}
        <Footer />
      </div>
    </main>
  )
}

export default BlogLayout
