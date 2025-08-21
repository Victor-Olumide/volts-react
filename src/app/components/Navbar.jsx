import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav  className='bg-gray-800 text-white p-4 text-center flex flex-row items-center justify-center'>
        <ul className='grid grid-cols-4  w-full'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
