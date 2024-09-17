"use client";

import Link from "next/link";
import Image from "next/image";

import { useSelector } from "react-redux";
import { Suspense, useState } from "react";

import BarraNav from "@/components/nav/nav-buttons";
import SearchBar from "@/components/ui/search-bar";

const NavBar = () => {
  const currentUser = useSelector( state => state.currentUser);

  return (
    <header>
      <nav className="flex flex-col h-full w-full text-gray-900">
        {/* Barra principal */}
        <div className="bg-white w-full h-[70px] m-auto">
          <div className="grid grid-cols-5 h-16 px-6">
            {/* Logo */}
            <div className="flex items-center justify-between w-fit">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/assets/logo.png.png"
                  alt="Kazu Moda Circular Logotipo"
                  width={120}
                  height={60}
                  className="object-contain p-2"
                />
              </Link>
            </div>
            {/* Barra de búsqueda */}
            <div className="hidden lg:flex lg:col-span-3 items-center justify-center w-full h-full gap-4">
              <Suspense fallback={<div>Loading...</div>}>
                <SearchBar
                  placeholder="Buscar productos, marcas y más..."
                  searchBtn
                  showSeparator
                />
                <Link
                  href="/vender"
                  className="grid place-content-center w-22 h-10 bg-purple-300 text-sm hover:bg-lila-neon hover:text-white rounded-md uppercase px-6"
                >
                  vender
                </Link>
              </Suspense>
            </div>
            {/* Cuenta de usuario */}
            <div className="flex col-span-4 lg:col-span-1 items-center justify-end w-50 gap-3 text-sm text-black font-semibold">
              {!currentUser && (
                <>
                  <Link href="/registro">Crea tu cuenta</Link>
                  <Link href="/login">Ingresa</Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Botonera de navegación  */}
        <BarraNav />
      </nav>
    </header>
  );
};

export default NavBar;
