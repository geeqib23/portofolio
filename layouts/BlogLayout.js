import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function BlogLayout(props) {
    // console.log(props)
    return (
        <div className='flex flex-col items-center text-white'>
            <Header />
            <div className=' text-2xl w-full sm:text-4xl sm:w-3/5 text-center text-primary m-1 font-semibold'>{props.title}</div>
            <div className='text-lg text-secondary m-2 font-mono font-semibold'>{props.date}</div>
            {/* <div className='text-xl w-3/5 text-center text-gray-300 m-3'>{props.description}</div> */}
            <div className=' h-px bg-secondaryLight w-11/12 m-5'></div>
            {props.children}
            <Footer />
        </div>
    )
}

export default BlogLayout
