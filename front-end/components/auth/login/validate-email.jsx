"use client";

import Link from "next/link";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { emailSchema } from "@/schemas/auth.schema";

export default function EmailForm({ setEmail }) {
  const [loading, setLoading] = useState(false);

  const { register, formState: { errors }, handleSubmit, watch } = useForm({
    resolver: yupResolver(emailSchema),
  });

  //? Validación del campo email.
  const handleForm = async (data) => {
    // TODO Llamada al API para verificar si el email esta asociado a una cuenta.
    setEmail(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="flex flex-col gap-2 items-start text-gray-600 w-full m-auto"
    >
      {/* Registro de correo */}
      <div className="flex flex-col justify-end w-full h-14 relative">
        <label
          htmlFor="email"
          className={`label-field ${watch("email") ? "-translate-y-6 " : null}`}
        >
          Correo
        </label>
        <div>
          <input
            id="email"
            type="email"
            autoFocus
            disabled={loading}
            placeholder="Correo"
            className={`input-field ${
              errors.email ? "border-red-500" : "border-gray-400"
            } `}
            {...register("email")}
          />
          <div className="w-full text-red-500 text-center max-w-sm h-5">
            {errors.email?.type === "required" && (
              <small>Este campo es requerido</small>
            )}
            {errors.email?.type === "email" && (
              <small>Ingrese un correo valido</small>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-sm">
        <div className="flex items-center gap-2 w-full font-semibold">
          <input
            name="remember"
            type="checkbox"
            id="remember"
            disabled={loading}
            className="accent-purple-500 disabled:cursor-not-allowed rounded-md border-purple-500 outline-purple-500 w-6 h-6"
            {...register("remember")}
          />
          <div className="flex justify-between w-full">
            <label htmlFor="remember" className="flex items-start text-sm">
              ¡Recuérdeme!
            </label>
            <Link href="#" className="text-sm text-blue-600 hover:underline">
              ¿Olvidaste tu Email?
            </Link>
          </div>
        </div>
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-60 font-semibold text-lg hover:bg-violet-500 h-12 rounded-3xl text-white bg-lila-dark hover:text-white transition-all duration-300 ease-in"
      >
        Continuar con email
      </Button>
    </form>
  );
}
