"use client"

import { useContext } from "react";
import { SidebarContext } from "../providers";

export default function AddCart() {
    const { setAddCart } = useContext(SidebarContext)
    function handleAddCartItem(){
        setAddCart(prev => prev + 1)
    }
  return (
    <button 
      onClick={handleAddCartItem}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
    >
      Add To Cart
    </button>
  );
}
