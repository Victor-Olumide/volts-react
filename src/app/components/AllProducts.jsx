import React from 'react'
import { products } from '../dummy'
import ProductCard from './ProductCard'

export default function AllProducts() {
    const productCards = products.sort(() => Math.random() - 0.5).map(product => (
        <ProductCard
            key={product.id}
            src={product.id}
            title={product.name}
            amount={product.amount}
            productDetails={product.productDetails}
        />
    ))
  return (
    <div className='flex flex-wrap justify-center gap-4 p-4 max-w-4/5 mx-auto'>{productCards}</div>
  )
}
