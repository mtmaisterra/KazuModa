
export const metadata = {
  title: "Kazu Moda | Bienvenid@!",
  description: "Generated by create next app",
  keywords: ["ropa", "moda"]
};
export default function Bienvenida() {
  return (
    <>

      <div className="flex flex-col bg-violet-300 items-center w-full">
        <div className="mt-40 mb-10 text-center">
          <h1 className="justify-center text-[4em]">¡Bienvenid@ a</h1>
          <h1 className="justify-center font-bold text-[4em]"> KAZU Moda Circular! </h1>
        </div>
        <div className="flex h-42 justify-center">
          <button className="bg-violet-500 rounded-lg pt-4 pb-4 pr-6 pl-6 justify-center text-white mb-2">
            <a href="/">Volver al inicio</a>
          </button>
        </div>
        <div className="flex justify-center h-15 mb-40">
          <h2 className="underline mt-1"> <a href="/">Mi Cuenta</a></h2>
        </div>
      </div>

    </>
  )
}