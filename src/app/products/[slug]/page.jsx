import React from "react";
import { DiAndroid } from "react-icons/di";
import { TbCurrencyNaira } from "react-icons/tb";
import { products } from "../../dummy";
import Image from "next/image";
import ProductCard from "@/app/components/ProductCard";
import AddCart from "@/app/components/AddCart";

export default function ProductDetailsPage({ params }) {
  const { slug } = params;
  const productInfo = products.find(
    (product) => product.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const image= `/${productInfo.id > 20 ? 0 : productInfo.id}.jpg`;

  return (
    <>
      <div className="flex items-center justify-center gap-8 p-8">
        <section className="flex flex-col bg-gray-50 p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4">{productInfo.name}</h1>
          <p className="mb-3 text-gray-600">
            <span className="font-semibold">Category:</span>{" "}
            {productInfo.category}
          </p>
          <p className="mb-3 text-gray-600">
            <span className="font-semibold">Dealer:</span> {productInfo.dealer}
          </p>
          <p className="flex mb-3 text-gray-600 gap-2">
            <span className="font-semibold">Price: </span>{" "}
            <span className=" flex text-xl font-bold text-green-600">
              <TbCurrencyNaira />
              {productInfo.amount}
            </span>
          </p>
          <h2 className="text-xl font-semibold mb-2">Product Description</h2>
          <ul className="mb-4 pl-5 text-gray-800">
            {Array.isArray(productInfo.productDescription) ? (
              productInfo.productDescription.map((desc, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <DiAndroid className="text-green-600" /> {desc}
                </li>
              ))
            ) : (
              <li className="flex items-center gap-2">
                <DiAndroid className="text-green-600" />{" "}
                {productInfo.productDescription}
              </li>
            )}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Product Details</h2>
          <p className="text-gray-800">{productInfo.productDetails}</p>
          <AddCart/>
        </section>
        <figure className="flex-shrink-0 w-80 text-center">
          <Image
            src={image}
            alt={productInfo.name}
            width={500}
            height={650}
            className="rounded-xl shadow-lg mx-auto"
          />
          <figcaption className="mt-4 font-bold text-gray-700">
            {productInfo.name}
          </figcaption>
        </figure>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Similar Products</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {products
            .filter(p => p.id !== productInfo.id && p.category === productInfo.category)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(product => (
              <ProductCard
                key={product.id}
                src={product.id}
                title={product.name}
                amount={product.amount}
                productDetails={product.productDetails}
              />
            ))}
        </div>
      </div>
    </>
  );
}
