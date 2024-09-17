"use client"


import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
 
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";


export default function ProductCard({ data }) {
	const { push } = useRouter();
	//* Normalización de las propiedades de los productos.
	const product = {
		id: data.id,
		name: data.name,
		img: data.img_url,
		rating: data.rating,
		price: data.price,
		size: data.size,
		shop: data.market,
		category: data.category
	}

	return (
		<figure className="flex flex-col justify-between max-w-60 cursor-pointer shadow-xl h-full bg-violet-200 rounded-lg overflow-hidden">
			<div className="relative h-[240px] w-full " onClick={() => push(`/productos/${product.category}/${product.id}`)}>
				<Image className="rounded-t-xl object-fill p-2" src={product.img} fill alt={`${product.name}`} />
			</div>
			{/* Descripción del producto */}
			<figcaption className=" flex flex-col w-full gap-2 py-4">
				<div className="flex justify-between items-center w-full text-sm px-4 ">
					<h4 className="justify-center text-2xl font-bold capitalize">
						{product.name}
					</h4>
					<span className="flex h-full gap-2 items-center text-sm text-gray-60">
						{product.rating}
						<FontAwesomeIcon icon={faStar} className="w-4 h-4" />
					</span>
				</div>
				<div className="flex justify-between px-4 capitalize text-sm ">
					<p>{product.size}</p>
					<p className="text-lila-neon font-bold">{product.shop}</p>
				</div>
				<div className="flex justify-between items-center w-full px-4">
					<p className="font-bold text-xl text-right">{`$${product.price.toFixed(2)}`}</p>
					<Button className="flex gap-2 px-2 border border-black bg-white hover:bg-lila-neon hover:text-white h-12 text-black text-xs font-bold transition-colors ease-in rounded-sm">
						<span className="w-16 text-wrap">Agregar al carrito</span>
						<FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />
					</Button>
				</div>
			</figcaption>
		</figure>
	)
}