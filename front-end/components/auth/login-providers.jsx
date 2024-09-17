"use client"

import Image from "next/image";


export default function LoginProviders(){
  return (
    <div className="flex flex-col items-center gap-8 w-full h-full text-white text-lg font-medium mx-auto">

      <button className="flex items-center bg-blue-500 gap-4 w-[380px] h-16 px-[3px]">
        <div className="grid place-content-center w-16 h-14 bg-white relative p-2">
          <Image src="/assets/google.svg" alt="Google Logo" width={32} height={32} />
        </div>
        <span className="w-full text-center">Registrarse con Google</span>
      </button>

      <button className="flex items-center bg-blue-700 gap-4 w-[380px] h-16 px-[3px]">
        <div className="grid place-content-center w-16 h-14 bg-white relative p-2">
          <Image src="/assets/facebook.svg" alt="Facebook Logo" width={32} height={32} />
        </div>
        <span className="w-full text-center">Registrarse con Facebook</span>
      </button>

      <button className="flex items-center gap-4 border border-black w-[380px] h-16 px-[3px]">
        <div className="grid place-content-center w-16 h-full border-r-[1px] border-black relative p-2">
          <Image src="/assets/apple.svg" alt="Apple Logo" width={32} height={32} />
        </div>
        <span className="w-full text-center text-black">Registrarse con Apple</span>
      </button>

    </div>
  )
}