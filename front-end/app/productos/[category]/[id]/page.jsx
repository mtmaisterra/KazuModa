"use client";

import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegHeart } from "react-icons/fa";

import { products } from "@/data/examples";
import SuggestionProducts from "@/components/productos/suggestion-carousel";
import { Button } from "@/components/ui/button";
import ProductSlider from "@/components/productos/product-slider";
import { usePathname } from "next/navigation";

const product = {
  name: "vestido casual para el verano",
  price: 368,
  offer: 200,
  size: "s",
  brand: "ellas",
  color: "rosa",
  materials: ["poliéster", "elastano"],
  imgs: [
    "/assets/VestidoCasualVerano.png",
    "/assets/VestidoCasualVeranoI.png",
    "/assets/VestidoCasualVeranoII.png"
  ],
  conditions: "seminuevo",
  shop: "MyTiendita"

}

export default function ProductPage({ data }) {
  const pathname = usePathname();
  const list = pathname.split("/")

  return (
    <article className="flex flex-col gap-10 p-12 justify-between w-full">
      <div className="flex w-full justify-center font-semibold capitalize text-lg gap-1">
        <span>
          inicio /{` ${list[2]}`} / <span className="text-lila-neon">{`${product.name}`}</span>
      </span>
      </div>
      <div className="flex w-full max-w-7xl h-full gap-12 mx-auto">
        {/* Carousel con las imágenes del producto */}
        <div className="w-[500px] h-full px-2 rounded-lg">
          <ProductSlider images={product.imgs}  name={product.name}/>
        </div>
        {/* Detalles del producto - botones de interacción */}
        <div className="flex flex-col w-full max-w-2xl gap-6 justify-center items-center bg-gray-light rounded-xl p-12 mx-auto">
          <h1 className="text-center text-2xl uppercase font-bold">{product.name}</h1>
          <div className="flex w-full max-w-sm justify-around items-start mx-auto">
            <p className="text-3xl font-bold">{`$${product.offer.toFixed(2)}`}</p>
            <p className="text-lg mb-2 line-through text-gray-700">{`$${product.price.toFixed(2)}`}</p>
          </div>
          <div className="flex gap-2 w-full justify-center max-w-lg">
            <Button className="flex justify-around items-center w-full max-w-md h-16 bg-lila-light hover:bg-lila-neon text-black hover:text-white text-md uppercase">
              agregar al carrito
              <FontAwesomeIcon icon={faShoppingCart} className="w-8 h-8 text-purple-dark"/>
            </Button>
            <Button className="flex items-center justify-center w-24 h-16 bg-lila-light hover:bg-lila-neon text-black">
              <FaRegHeart className="w-8 h-8 text-purple-dark"/>
            </Button>
          </div>
          <Button className="flex justify-center items-center w-full max-w-lg h-16 bg-lila-light hover:bg-lila-neon text-black hover:text-white text-lg uppercase">
            comprar ahora
          </Button>
          {/* Características */}
          <div className="flex flex-col w-full justify-center gap-4">
            <h2 className="text-left text-xl font-semibold">
              Características
            </h2>
            <ul className="flex flex-col gap-4 capitalize w-full text-xl px-12">
              <li>Talle: {product.size}</li>
              <li>Marca: {product.brand}</li>
              <li>Color: {product.color}</li>
              <li>Material: {product.materials.map( material => (<>{`${material} `}</>))}</li>
            </ul>
          </div>
          {/* Vendedor y estado del producto */}
          <hr className="w-full h-[2px] bg-purple-400 border-none" />
          <ul className="flex flex-col justify-center items-center capitalize w-full text-lg">
            <li>Condiciones: {product.conditions}</li>
            <li>Vendido por: {product.shop} </li>
          </ul>
          <hr className="w-full h-[2px] bg-purple-400 border-none" />
          <div className="text-xl w-full text-center">
            <p>
              Al comprar ropa de segunda mano en lugar de nueva{" "}
              <span className="text-green-500"> &#9851; </span>
              estás ayudando al medio ambiente al ahorrar agua, reducir
              emisiones de CO2 y el uso de energía.
            </p>
            <p className="text-center  mt-10">
              Tu decisión tiene un impacto positivo en el planeta.¡Gracias por
              contribuir a hacer una diferencia! &#127759; &#128154;
            </p>
          </div>
        </div>
      </div>

      {/*Artículos relacionados - carrousel*/}
      <div className="flex flex-col gap-6 w-full bg-gray-light rounded-md p-6">
        <h2 className="font-bold">Artículos relacionados</h2>
        <div className="w-full px-8">
          <SuggestionProducts suggestions={products} />
        </div>
      </div>
    </article>
  );
}
