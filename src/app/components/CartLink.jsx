"use client"
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { SidebarContext } from '../providers';

export default function CartLink() {
    const {addCart} = useContext(SidebarContext)
  return (
    <li className='flex gap-2 items-center cursor-pointer'>
        <FaShoppingCart className='text-2xl' />
        <span>
            <sup>{addCart}</sup></span>
    </li>
  )
}
