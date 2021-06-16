import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='w-11/12 shadow-2xl m-3'>
            <Link href='/'>
   <div className=' cursor-pointer text-3xl text-primary text-left font-cursive h-10'> Aqib Suhail</div>
            </Link>     
        </div>
    )
}

export default Header
