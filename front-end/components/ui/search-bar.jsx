"use client"

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { FaSearch } from 'react-icons/fa';
import { useDebouncedCallback } from "use-debounce";

import { cn } from "@/lib/utils";


/**
 * Generates a search bar component with customizable placeholder, styles, search button, icon, and separator visibility.
 *
 * @param {string} placeholder - The text to display in the input placeholder
 * @param {string} styles - Additional CSS classes to apply to the search bar
 * @param {boolean} searchBtn - Flag to display the search button by default false
 * @param {React.Component} icon - The icon component to display in the search button
 * @param {boolean} showSeparator - Flag to display a separator line by default false
 * @return {JSX.Element} The search bar component
 */
export default function SearchBar({ placeholder, styles, searchBtn, icon, showSeparator }) {
  const pathName = usePathname(); // Obtiene la ruta actual
  const { replace } = useRouter(); // permite realizar remplazar una parte de la ruta de navegación
  const searchParams = useSearchParams(); // Obtiene los parámetros de la ruta actual
  const params = new URLSearchParams(searchParams); // Crea un objeto URLSearchParams a partir de los parámetros de la ruta actual

  // Debounce permite realizar una acción de manera asíncrona después de un tiempo determinado.
  const handleSearch = useDebouncedCallback( searchQuery  => {
    // Verifica si la longitud de la cadena de búsqueda es mayor que 2 caracteres
    // y si lo es crear un nuevo parámetro de búsqueda con el valor de la cadena de búsqueda
    if (searchQuery.length > 2) {
      params.set('search', searchQuery);
    } else {
      params.delete('search');
    }

    // Reemplaza la ruta actual con la nueva ruta con los parámetros de búsqueda actualizados
    replace(`${pathName}?${params.toString()}`)
  }, 300)

  return (
    <form
      role="search"
      className={cn("flex w-full h-10 max-w-xl gap-2 bg-gray-light/10 items-center search-shadow rounded-3xl px-2 py-1", styles)}
    >
      <input
        type='search'
        role="searchbox"
        placeholder={placeholder}
        onChange={e => handleSearch(e.target.value)}
        className='border-none bg-transparent h-8 ml-4  w-full text-gray-600 text-sm focus:outline-none font-bold'
      />
      {
        showSeparator ? <hr className="bg-gray-400 h-8 w-[2px] items-center" /> : null
      }
      {
        searchBtn ? (
          <button className='flex items-center justify-center p-2'>
            {
              icon ? <icon className='h-4 w-4 text-gray-500' /> : <FaSearch className='h-4 w-4 text-gray-500' />
            }
          </button>
        ) : null
      }
    </form>
  )
}