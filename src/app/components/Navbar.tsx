import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 bg-blue-500 text-white'>
      <div className='text-2xl font-bold'>
        <Link href="/pages/">My Website</Link>
      </div>
      
      <div className='flex space-x-6'>
        <Link href="/pages/first-file" className='hover:text-gray-200'>First File</Link>
        <Link href="/pages/cardList" className='hover:text-gray-200'>Users</Link>
        <Link href="/pages/login" className='hover:text-gray-200'>Login</Link>
        <Link href="/pages/services" className='hover:text-gray-200'>Services</Link>
        <Link href="/pages/contact" className='hover:text-gray-200'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
