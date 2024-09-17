"use client"

import Image from "next/image";

import { categories } from "@/data/examples";
import { Button } from "@/components/ui/button";

export default function SubCategorySelector() {
  return (
    <>
      <ul className="w-full h-full bg-lila-light rounded-3xl grid grid-cols-5 place-items-center gap-2 p-4">
        {
          categories.map(category => (
            <li key={category.id} className="h-full">
              <Button className="flex flex-col gap-2 text-lg capitalize bg-transparent hover:bg-transparent text-black font-medium w-full h-full text-center border-none shadow-none">
                <div className="w-[220px] h-[190px] rounded-lg overflow-hidden">
                  <Image
                    src={category.image}
                    width={240}
                    height={200}
                    alt={category.name}
                    placeholder="blur"
                    blurDataURL={category.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>{category.name}</p>
              </Button>
            </li>
          ))
        }
      </ul>
    </>
  )
}