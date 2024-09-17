"use client"

import Image from "next/image";

import { marcas } from "@/data/examples";

const Marcas = () => {

  return (
    <div className="flex flex-col gap-12 items-start justify-center w-full h-350 p-6">
      <h2 className="text-2xl text-left font-semibold p-0">Compra tus marcas favoritas sin culpa</h2>
      <div className="flex justify-center gap-4 m-auto w-full">
        {
          marcas.map((marca) => (
            <div key={marca.id} className="flex w-{150px} h-{150px} items-center justify-center gap-4 border-2 border-gray-600 rounded-full p-4">
              <Image
                src={marca.image}
                width={100}
                height={100}
                alt={marca.name}
                className="object-containt"
              />
            </div>
          ))
        }
      </div>
    </div>
  )
};
export default Marcas;