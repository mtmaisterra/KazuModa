"use client"

import { usePathname } from "next/navigation";

import AsideProducts from "@/components/productos/aside-bar";



export default function CategoriesLayout({ children }) {
  const pathname = usePathname();
  const list = pathname.split("/")


  return (
    <main className="flex-col justify-center items-center gap-10 text-gray-800 p-4">
      <section className="flex flex-col w-full justify-center items-center font-medium py-10">
        <h1 className="tracking-widest text-semibold uppercase text-2xl ">{list.length == 4 ? list[3] : list[2]}</h1>
        <div className="flex w-full justify-center font-semibold capitalize text-lg gap-1">
          <span>inicio</span>
          {
            list.map((name, index) => (
              <p key={index} >
                {index > 1 ? "/ " : null}
                <span className={`capitalize ${index === list.length - 1 ? "text-lila-dark" : null}`}>
                  {index > 1 ? `${name}` : null}
                </span>
              </p>
            ))
          }
        </div>
      </section>
      <section className="flex w-full gap-6 mb-16">
        <AsideProducts />
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-12 px-4 mx-auto">
          {children}
        </div>
      </section>
    </main>
  )
}