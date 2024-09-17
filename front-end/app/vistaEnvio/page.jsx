"use client"

import { faCheckCircle, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'next/image';
import Link from 'next/link';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Product = [
    { id: 1, image: "/assets/VestidoCasualVerano.png", name: "VESTIDO CASUAL DE VERANO", description: "Condiciones: usado (como nuevo)", seller: "Vendido por: MyTiendita", price: "$ 200.000" },
    { id: 2, image: "/assets/VestidoCortoJeans.png", name: "VESTIDO CORTO JEANS CON CINTURÓN", description: "Condiciones: nuevo (sin etiqueta)", seller: "Vendido por: Casa Shoppy", price: "$ 150.000" }
]

export default function Envio() {
    return (
        <>
            <div className="flex w-full justify-center text-xl mt-10 mb-40">
                <p className="text-center">
                    <span className="mx-3 text-violet-400"> Carrito
                        <span className="mx-3"> - </span>
                        <FontAwesomeIcon icon={faCheckCircle} className="mx-3" /> -
                    </span>
                    <span className="mx-3 text-violet-400"> Envio </span>
                    <span className="mx-3"> - </span>
                    <span className="ml-3">
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <span className="ml-3"> - </span>
                    <span className="ml-3"> Pago </span>
                </p>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-3/5 text-xl pl-10 my-8">DETALLES DEL CLIENTE</TableHead>
                        <TableHead className="w-2/5 text-xl mt-10 pt-16 pl-10">RESUMEN DEL PEDIDO (02)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='w-1/2 bg-transparent mr-5 rounded-xl'>
                    {/*Detalles del comprador*/}
                    <TableRow className='rounded-xl bg-transparent px-2 mr-5'>
                        <TableCell className='mx-10 w-3/5 rounded-xl mb-10'>
                            <div className="flex bg-gray-200 w-9/10 rounded-2xl mx-8">
                                <div className='mb-5 w-full mx-2'>
                                    <p className='ml-6 text-base pt-5 pb-3'>
                                        Nombre *
                                    </p>
                                    <p className='bg-violet-300 mx-10 w-9/10 h-12 flex items-center justify-end my-2'>
                                        <span className='mx-2'>
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                                        </span>
                                    </p>
                                    <p className='ml-6 text-base pt-5 pb-3'>
                                        Apellido *
                                    </p>
                                    <p className='bg-violet-300 flex mx-10 h-12 items-center justify-end my-2'>
                                        <span className='mx-2'>
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                                        </span>
                                    </p>
                                    <p className='ml-6 text-base pt-5 pb-3'>
                                        Teléfono *
                                    </p>
                                    <p className='bg-violet-300 flex mx-10 h-12 items-center justify-end my-2'>
                                        <span className='mx-2'>
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                                        </span>
                                    </p>
                                    <p className='ml-6 text-base pt-5 pb-3'>
                                        DNI/CI *
                                    </p>
                                    <p className='bg-violet-300 mx-10 h-10 flex items-center mb-6'></p>
                                </div>
                            </div>
                        </TableCell>
                        <TableRow colSpan={2} className='rounded-xl'>
                            <TableCell className='mx-10 w-3/5 rounded-xl mb-10'>
                                <div className='rounded-xl'>
                                    <TableHeader className="bg-gray-200 rounded-xl my-4">
                                        <TableRow>
                                            <TableHead className="w-[100px] text-base pl-10">PRODUCTO</TableHead>
                                            <TableHead className="text-base pl-20">DESCRIPCIÓN</TableHead>
                                            <TableHead className="text-base pl-20">PRECIO</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody className='w-1/2 bg-gray-200 mr-2 rounded-2xl'>
                                        {
                                            Product.map((producto) => (
                                                <TableRow key={producto.id} className='rounded-xl'>
                                                    <TableCell className="text-base">
                                                        <Img
                                                            width={100}
                                                            height={180}
                                                            src={producto.image}
                                                            style={{ marginLeft: '20px', marginRight: '20px' }}
                                                            alt="Producto" />
                                                    </TableCell>
                                                    <TableCell className="text-base mx-10 pl-20 py-5">
                                                        <p>{producto.name}</p>
                                                        <p>{producto.description}</p>
                                                        <p>{producto.seller}</p>
                                                    </TableCell>
                                                    <TableCell className="text-base pl-20 pr-10">{producto.price}</TableCell>
                                                </TableRow>
                                            ))}
                                        <TableCell colSpan={4}>
                                            <div class="border-b border-violet-400 my-2"></div>
                                            <div className='flex bg-gray-200 my-1 justify-around w-full h-10 mr-10 p-5'>
                                                <div className='flex justify-between w-full text-center items-center'>
                                                    <p className='text-base font-bold  text-left'>Sub-TOTAL</p>
                                                    <p className='text-base font-bold  text-left'>$ 350.000</p>
                                                </div>
                                            </div>
                                            <div className='flex bg-gray-200 justify-around w-full h-10 mr-10 p-5'>
                                                <div className='flex justify-between w-full text-center items-center'>
                                                    <p className='text-base font-bold  text-left'>Costo de envio</p>
                                                    <p className='text-base font-bold  text-left'>$ 0,00</p>
                                                </div>
                                            </div>
                                            <div class="border-b border-violet-400 my-2"></div>
                                            <div className='flex bg-gray-200 my-1 justify-around w-full h-10 mr-10 p-5'>
                                                <div className='flex justify-between w-full text-center items-center'>
                                                    <p className='text-base font-bold  text-left'>TOTAL</p>
                                                    <p className='text-base font-bold  text-left'>$ 350.000</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableBody>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableRow>
                </TableBody>
                <TableFooter className='w-1/2 bg-transparent mr-5 rounded-xl'>
                    <TableHeader>
                        <div className='my-10'>
                            <TableRow className='my-10'>
                                <TableHead className="text-xl pl-10 my-5">DETALLES DE ENVIO</TableHead>
                            </TableRow>
                        </div>
                    </TableHeader>
                    {/*Detalles del envio*/}
                    <TableRow className='rounded-xl bg-transparent px-2 mr-5'>
                        <TableCell className='mx-10 w-3/5 rounded-xl mb-10'>
                            <div className="flex bg-gray-200 w-9/10 rounded-2xl mx-8">
                                <div className='mb-5 w-full mx-2'>
                                    <p className='ml-6 text-base w-9/10 pt-5 pb-3'>
                                        País / Región *
                                    </p>
                                    <p className='bg-violet-300 mx-10 w-9/10 h-12 flex items-center justify-end'>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="argentina">Argentina</SelectItem>
                                                <SelectItem value="colombia">Colombia</SelectItem>
                                                <SelectItem value="mexico">México</SelectItem>
                                                <SelectItem value="venezuela">Venezuela</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </p>
                                    <p className='ml-6 text-base pt-5 pb-3'>
                                        Dirección *
                                    </p>
                                    <p className='bg-violet-300 flex mx-10 h-12 items-center justify-end'>
                                    </p>
                                    <p className='ml-6 text-base pt-5 pb-3'>
                                        Ciudad *
                                    </p>
                                    <p className='bg-violet-300 flex mx-10 h-12 items-center justify-end'>
                                    </p>
                                    <p className='ml-6 text-base pt-5 pb-3'>
                                        Código Postal *
                                    </p>
                                    <p className='bg-violet-300 mx-10 h-12 flex items-center mb-6'></p>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1} className='bg-transparent'>
                            <div className='flex items-center justify-end gap-2 mx-10'>
                                <Link href="/pagar">
                                    <button className='bg-lila-light rounded-xl px-10 py-5 my-10 hover:border-violet-600 hover:border-2 w-full flex justify-center items-center'>
                                        <p className='text-base text-center'>IR A PAGAR</p>
                                    </button>
                                </Link>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableFooter>

            </Table >
        </>
    );
}
