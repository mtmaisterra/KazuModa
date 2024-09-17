"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { useSelector, useDispatch } from 'react-redux';

import {
  faCartShopping,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegHeart } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { axiosInstance } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { menuCategories } from "@/lib/constants";
import { setCurrentUser } from "@/redux-store/features/currentUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BarraNav() {
  const { push } = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const currentCategory = pathname.split("/");
  const user = useSelector(state => state.currentUser);

  const handleLogout =() => {
    axiosInstance.post("/api/v1/logout")
      .then( res => {
        localStorage.removeItem("session");
        dispatch(setCurrentUser(null))
        push("/login")
      })
      .catch( err => console.error(err.response))
  }

  return (
    <div className="flex w-full h-[60px] items-center justify-center bg-gray-300 relative">
      <div className="flex w-10/12 h-full justify-end items-center px-28 gap-6">
        {menuCategories?.map((category) => (
          <DropdownMenu key={category.id}>
            {
              //* Verifica si la categoría tiene sub-categorías para crear el dropdown y si no un enlace.
              category.sub_category.length > 0 ? (
                <DropdownMenuTrigger
                  className={`
                    ${
                      currentCategory[2] == category.name
                        ? "bg-lila-light shadow-lg"
                        : "bg-white shadow-none"
                    }
                    h-8 text-black font-semibold hover:bg-lila-light appearance-none text-sm rounded-md capitalize px-4`}
                >
                  {category.name == "ninos" ? "niños" : category.name}
                </DropdownMenuTrigger>
              ) : (
                <Link
                  href={`/categorias/${category.name}`}
                  className={`
                  ${
                    currentCategory[2] == category.name
                      ? "bg-lila-light shadow-lg"
                      : "bg-white shadow-none"
                  }
                  h-8 flex items-center text-black font-semibold hover:bg-lila-light appearance-none text-sm rounded-md capitalize px-4`}
                >
                  {category.name}
                </Link>
              )
            }
            {
              //* Si la categoría tiene sub-categorías es renderizado el listado de las mismas
              category.sub_category.length > 0 && (
                <DropdownMenuContent className="flex flex-col gap-2 mt-3 w-56">
                  {category.sub_category.map((sub) => (
                    <Link
                      key={sub.name}
                      href={`/categorias/${category.name}/${sub.name}`}
                    >
                      <DropdownMenuItem className="flex w-full h-12 items-center justify-between rounded-md uppercase bg-gray-light focus:bg-gray-500 font-bold focus:text-white">
                        <span>{sub.name}</span>
                        <Image
                          src={sub.img}
                          alt={sub.name}
                          width={48}
                          height={48}
                        />
                      </DropdownMenuItem>
                    </Link>
                  ))}
                  <Link href={`/categorias/${category.name}/todo`}>
                    <DropdownMenuItem className="flex w-full h-12 items-center justify-between rounded-md uppercase bg-gray-light focus:bg-gray-500 font-bold focus:text-white">
                      <span>ver todo</span>
                      <div className="grid place-content-center w-12 h-12">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="w-8 h-8"
                        />
                      </div>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              )
            }
          </DropdownMenu>
        ))}
      </div>
      {/* Barra de session y productos */}
      <div className="flex w-60 h-full items-center justify-end mr-6 gap-4">
        {
          // Información del usuario y control de la session.
          user && (
            <div className="flex gap-2">
              <Avatar className="w-10 h-10">
                {user.avatar ? (
                  <AvatarImage src={user.avatar} />
                ) : (
                  <AvatarFallback className="uppercase">
                    {user.name
                      ? `${user.name.split(" ")[0][0]}${
                          user.name.split(" ")[1][0]
                        }`
                      : "US"}
                  </AvatarFallback>
                )}
              </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex gap-2 items-center justify-between text-xs font-bold w-32 p-2">
                  <span className="truncate">
                    {user.name ? user.name : user.email}
                  </span>
                  <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-2 mt-2 w-52">
                  <Link href="/perfil">
                    <DropdownMenuItem className="flex w-full h-10 items-center justify-between rounded-md uppercase bg-gray-light focus:bg-gray-500 font-bold focus:text-white px-8">
                      mi cuenta
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem className="flex w-full h-10 items-center rounded-md bg-gray-light focus:bg-gray-500" >
                    <Button className="flex justify-start bg-transparent hover:bg-transparent text-black hover:text-white  font-bold uppercase w-full h-10 px-6" onClick={handleLogout}>
                      salir
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )
        }
        {/* Carrito de compras y favoritos */}
        <Link href="/favoritos" className="grid place-content-center w-7 h-7">
          <FaRegHeart className="w-6 h-6 text-purple-dark" />
        </Link>
        <Link href="/carrito" className="grid place-content-center w-7 h-7">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="w-6 h-6 text-purple-dark"
          />
        </Link>
      </div>
    </div>
  );
}
