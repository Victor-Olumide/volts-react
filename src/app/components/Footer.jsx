import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white p-4 text-center flex flex-col items-center justify-center'>
      <ul className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 space-x-4 w-full pb-7'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/signup">Signup</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/forgot-password">Forgot Password</Link>
        </li>
      </ul>
      <p>&copy; {new Date('2003-01-11').getFullYear()} {new Date().getFullYear()} Volts programs, All rights reserved.</p>
    </footer>
  )
}
