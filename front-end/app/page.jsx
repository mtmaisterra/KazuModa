"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { CarouselHero } from "@/components/ui/carousel";


const SubCategorySelector = dynamic(() => import("@/components/home/subCategory-selector"));
const CallToActionGirl = dynamic(() => import("@/components/home/callToAction-girl"), { ssr: false });
const Destacados = dynamic(() => import("@/components/home/destacados"), { ssr: false });
const Marcas = dynamic(() => import("@/components/home/marcas"), { ssr: false });


export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <CarouselHero />

      {/* Sección con las categorías */}
      <section className="flex items-center justify-center w-full h-[300px] p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <SubCategorySelector />
        </Suspense>
      </section>

      {/* Sección de últimos productos destacados */}
      <section className="p-4 mb-20">
        <h1 className="text-2xl font-semibold px-12 mb-6">Últimos agregados...</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Destacados />
        </Suspense>
      </section>

      {/* Sección de la chica con el call to action */}
      <section className="flex items-end h-[400px] relative p-0">
        <Suspense fallback={<div>Loading...</div>}>
          <CallToActionGirl />
        </Suspense>
      </section>

      {/* Sección de las marcas */}
      <section className="p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Marcas />
        </Suspense>
      </section>
    </main>
  );
}
