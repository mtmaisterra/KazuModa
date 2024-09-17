"use client"

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Button } from "../ui/button"


const subcategories = [
  { id: "1", name: "vestidos / enterizos", url: "/categorias/mujeres/vestidos" },
  { id: "2", name: "blusas", url: "/categorias/mujeres/blusas" },
  { id: "3", name: "top / camisetas", url: "/categorias/mujeres/camisetas" },
  { id: "4", name: "chaquetas y abrigos", url: "/categorias/mujeres/chaquetas" },
  { id: "5", name: "sweaters", url: "/categorias/mujeres/swaters" },
  { id: "6", name: "pantalones", url: "/categorias/mujeres/pantalones" },
  { id: "7", name: "faldas", url: "/categorias/mujeres/faldas" },
  { id: "8", name: "zapatos", url: "/categorias/mujeres/zapatos" },
  { id: "9", name: "carteras / bolsos / monederos", url: "/categorias/mujeres/bolsos" },
  { id: "10", name: "accesorios", url: "/categorias/mujeres/accesorios" },
  { id: "11", name: "ropa deportiva", url: "/categorias/mujeres/deportes" },
  { id: "12", name: "traje de baño", url: "/categorias/mujeres/traje_de_bano" },
  { id: "13", name: "shorts", url: "/categorias/mujeres/shorts" },
  { id: "14", name: "conjuntos", url: "/categorias/mujeres/conjuntos" },
]

const filters = ["tallas", "estilo", "precio", "condición", "marcas", "colores", "tallas"]


export default function AsideProducts() {

  return (
    <aside className="flex flex-col items-start justify-center gap-6 w-full max-w-xs h-full bg-lila-light rounded-xl p-6">
      <h2 className="self-center font-semibold">Categorías</h2>
      {/* Listado de sub-categorías detallado */}
      <ul className="flex flex-col w-full gap-4 text-gray-600">
        {
          subcategories.map( sub => (
            <li key={sub.id}>
              <Link href={sub.url} className="capitalize font-semibold">
                {sub.name}
              </Link>
            </li>
          ))
        }
      </ul>
      {/* Filtrado */}
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <h3 className="self-center font-semibold">Filtros</h3>
        <hr className="w-full h-[1px] bg-gray-600 border-none"/>
        <ul className="flex flex-col w-full gap-2 text-gray-600">
          {
            filters.map( (filter, index) => (
              <div key={index}>
                <li className="flex justify-between items-center capitalize text-gray-700 font-bold cursor-pointer p-2">
                  {filter}
                  <span className="grid place-content-center w-6 h-6 border border-gray-800 rounded-full">
                    <FontAwesomeIcon icon={faPlus} className="w-4 h-4"/>
                  </span>
                </li>
                <hr className="w-full h-[1px] bg-gray-600 border-none"/>
              </div>
            ))
          }
        </ul>
        <Button className="self-center uppercase bg-white text-black hover:bg-lila-dark hover:text-white rounded-sm border-2 mt-4 px-8 border-black">
          Filtrar
        </Button>
      </div>
    </aside>
  )
}