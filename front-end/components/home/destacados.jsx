"use client"

import Img from "next/image";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { destacados } from "@/data/examples";

export default function Destacados() {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full justify-center gap-4 p-4 mx-auto'>
      {
        destacados.map((destacado) => (

          <figure className="w-full max-w-[270px] shadow-xl h-full bg-violet-200 rounded-lg" key={destacado.id}>
            <div className="w-full h-64 relative">
              <Img
                className="rounded-t-xl object-cover"
                src={destacado.image}
                alt={`${destacado.id + 1} ${destacado.image}`}
                fill
              />
            </div>
            {/* Contenido de la tarjeta de productos destacados */}
            <figcaption className="flex flex-col w-full h-full gap-1 text-sm p-2">
              <h3 className="text-xl font-bold capitalize text-left pl-4 ">{`${destacado.name}`}</h3>

              <div className="flex justify-between w-full mr-5 mb-2">
                <span className="pl-4">{`${destacado.seller}`}</span>
                <span className="flex gap-2 text-gray-500 pr-4">
                  {destacado.rate}
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                </span>
              </div>

              <div className="flex justify-between w-full">
                <span className="flex gap-4 pl-4 mb-2">
                  <p className="font-bold text-xl text-right">{`${destacado.priceOff}`}</p>
                  <p className="line-through text-center pl-6 text-gray-500">{`${destacado.price}`} </p>
                </span>
                <p className="font-bold text-red-700 pr-4 text-left">{`${destacado.discount}`}</p>
              </div>

            </figcaption>
          </figure>
        ))
      }
    </div>
  )
};

