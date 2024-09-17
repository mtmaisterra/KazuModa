"use client"

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { SyncLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { axiosInstance } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { passwordSchema } from "@/schemas/auth.schema";
import { setCurrentUser } from '@/redux-store/features/currentUser';

export default function PasswordForm({ email }) {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { register, formState: { errors }, handleSubmit, watch } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const handleForm = async (data) => {
    setLoading(true)
    await axiosInstance.post("/api/v1/login", { email: email, password: data.password })
      .then((res) => {
        dispatch(setCurrentUser(res.data)); 
        localStorage.setItem("session", JSON.stringify(res.data))// asigna los datos del usuario..
        push("/bienvenida"); // redirecciona a la pagina de bienvenida.
      })
      .catch((err) => {
        console.log(err.response)
        err.response ? setMessage(err.response.data.message) : setMessage("Unable server connection")
      })
      .finally( () => setLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="flex flex-col gap-2 items-start text-gray-600 w-full m-auto"
    >
      {/* Input del password */}
      <div className="flex flex-col justify-end w-full h-14 relative">
        <label
          htmlFor="password"
          className={`label-field ${
            watch("password") ? "-translate-y-6 " : null
          }`}
        >
          Contraseña
        </label>
        <div>
          <input
            id="password"
            type="password"
            autoFocus
            disabled={loading}
            placeholder="Correo"
            className={`input-field ${
              errors.password ? "border-red-500" : "border-gray-400"
            } `}
            {...register("password")}
          />
          <div className="w-full text-red-500 text-center max-w-sm h-5">
            {errors.password?.type === "required" && (
              <small>Este campo es requerido</small>
            )}
          </div>
        </div>
      </div>
      {/* Recuperación de contraseña enlace */}
      <div className="flex justify-end gap-2 w-full max-w-sm font-semibold">
        <Link href="#" className="text-sm text-blue-600 hover:underline">
          ¿Olvidaste tu Contraseña?
        </Link>
      </div>

      {
        // Notificación de error en el proceso de autentificación
        message && (
          <div className="w-full font-bold p-2 bg-red-300 border rounded-md border-red-400 text-red-700 text-center capitalize">
            {message}
          </div>
        )
      }

      <Button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center w-60 font-semibold text-lg hover:bg-violet-500 h-12 rounded-3xl text-white bg-lila-dark hover:text-white transition-all duration-300 ease-in"
      >
        <SyncLoader
          color="#fff"
          loading={loading}
          size={22}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {loading ? null : "Continuar con email"}
      </Button>
    </form>
  );
}
