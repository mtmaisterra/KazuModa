"use client"

import ProductCard from "@/components/productos/product-card";
import { products } from "@/data/examples";


export default function ProductView() {

  return (
    <>
      {
        products.map( product => (
          <ProductCard data={product} key={product.id} />
        ))
      }
    </>
  )
};


