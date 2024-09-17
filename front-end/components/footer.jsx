"use client"

import Link from 'next/link';
import { socials } from '@/lib/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {

  return (
    <footer className='flex flex-col items-center font-bold justify-center bg-gray-300 text-gray-800 w-full h-72 gap-4'>
      <div className="justify-center flex gap-6 m-5 w-full p-5 text-lg">
        <Link href="/">¿Cómo comprar?</Link>
        <Link href="/">¿Cómo vender?</Link>
        <Link href="/">Preguntas frecuentes</Link>
        <Link href="/">Contacto</Link>
      </div>

      <div className='justify-center flex p-2'>
        {
          socials.map((red) => (
            <Link href="/" className="w-10 m-2" key={red.id}>
              <FontAwesomeIcon icon={red.icon} className='w-7 h-7' />
            </Link>
          ))
        }
      </div>
    </footer>
  )
};

export default Footer;