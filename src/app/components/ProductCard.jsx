import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import AddCart from "./AddCart";

export default function ProductCard({ src, title, amount, productDetails }) {
  return (
    <section className="flex flex-col justify-between gap-2 border border-gray-300 p-4 rounded-lg max-w-[300px] hover:shadow-lg transition-shadow duration-300">
      <Link
        href={`/products/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="w-full flex flex-col items-center gap-2"
        title={title}
      >
        <Image
          src={`/${src > 20 ? 0 : src}.jpg`}
          alt={title}
          height={500}
          width={300}
          className="cursor-pointer hover:scale-110 transition-all"
        />
      </Link>
      <h2 className="font-semibold">{title}</h2>
      <p className="flex items-center gap-1 text-lg font-semibold">
        <TbCurrencyNaira />
        <span>{amount}</span>
      </p>
      <p>{productDetails}</p>

      <AddCart />

    </section>
  );
}
