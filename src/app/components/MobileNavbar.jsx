"use client"

import {useState} from 'react'
import { navbar } from '../dummy'
import NavbarLink from './NavbarLink'
import CartLink from './CartLink'
import { GiHamburgerMenu } from "react-icons/gi";

export default function MobileNavbar() {
    const [showNav, setShowNav] = useState(false)

    function handleMobileNavigation (){
        setShowNav(!showNav)
    }
    const mobile = navbar.map((item, index) =>(
    <NavbarLink key={index} title={item.name} link={item.href} />
    ))

  return (
    <>
    <ul className='md:hidden flex justify-between text-white bg-gray-700 px-8 py-5 gap-8'>
        <NavbarLink title="Home" link="/" />
        <CartLink />
        <li className='text-2xl cursor-pointer'
        onClick={handleMobileNavigation}><GiHamburgerMenu /></li>
    </ul>

    {showNav &&
    <ul className='md:hidden flex flex-col justify-evenly items-end text-white bg-gray-700 px-8 py-5 gap-4 h-screen' onClick={handleMobileNavigation}>
        {mobile}
        <CartLink />
    </ul>
    }
    </>
  )
}
