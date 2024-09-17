"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { SyncLoader } from "react-spinners";
import { yupResolver } from "@hookform/resolvers/yup";

import { axiosInstance } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/schemas/auth.schema";

export default function RegisterForm() {
  const { push } = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleForm = (data) => {
    setLoading(true);
    axiosInstance
      .post("/api/v1/register", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data);
        push("/login");
      })
      .catch((res) => setMessage(res.response.data))
      .finally( () => setLoading(false));
  };

  return (
    <form
      action={handleSubmit(handleForm)}
      className="flex flex-col gap-8 items-start text-gray-600 w-full m-auto"
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
            autoComplete="on"
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

      {/* Registro de password */}
      <div className="flex flex-col justify-end w-full h-14 relative">
        <label
          htmlFor="password"
          className={`label-field ${
            watch("password") ? "-translate-y-6 " : null
          }`}
        >
          Password
        </label>
        <div>
          <input
            id="password"
            type="password"
            disabled={loading}
            className={`input-field ${
              errors.password ? " border-red-500" : "border-gray-400"
            }`}
            {...register("password")}
          />
          <div className="w-full text-red-500 text-center max-w-sm h-6">
            {errors.password?.type === "required" && (
              <small>Este campo es requerido</small>
            )}
            {errors.password?.type === "min" && (
              <small>La contraseña debe tener al menos 6 caracteres</small>
            )}
            {errors.password?.type === "matches" && (
              <small>
                La contraseña debe tener al menos 1 mayúscula, 1 minúscula, 1
                número y 1 símbolo
              </small>
            )}
          </div>
        </div>
      </div>

      {/* Registro de confirmar password */}
      <div className="flex flex-col justify-end w-full h-14 relative">
        <label
          htmlFor="confirmPassword"
          className={`label-field ${
            watch("confirmPassword") ? "-translate-y-6 " : null
          }`}
        >
          Repetir contraseña
        </label>
        <div>
          <input
            id="confirmPassword"
            type="password"
            disabled={loading}
            className={`input-field ${
              errors.confirmPassword ? "border-red-500" : "border-gray-400"
            }`}
            {...register("confirmPassword")}
          />
          <div className="w-full text-red-500 text-center max-w-sm h-5">
            {errors.confirmPassword?.type === "required" && (
              <small>Este campo es requerido</small>
            )}
            {errors.confirmPassword?.type === "oneOf" && (
              <small>Las contraseña no coinciden</small>
            )}
          </div>
        </div>
      </div>

      {/* Aceptar términos y condiciones */}
      <div className="flex flex-col gap-2 w-full max-w-sm">
        <div className="flex items-start gap-4 w-full font-semibold">
          <input
            name="terms"
            type="checkbox"
            id="terms"
            disabled={loading}
            className="accent-purple-500 disabled:cursor-not-allowed rounded-md outline-purple-500 border-purple-500 w-6 h-6"
            {...register("acceptTerms")}
          />
          <label htmlFor="terms" className="flex items-start">
            <small>
              Aceptar los{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Términos y condiciones{" "}
              </a>
              y las{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Políticas de privacidad
              </a>
            </small>
          </label>
        </div>
        <div className="w-full text-red-500 text-center max-w-sm h-5">
          {errors.acceptTerms?.type === "oneOf" && (
            <small>Debes aceptar los términos y condiciones.</small>
          )}
        </div>
      </div>

      {message && (
        <div className="w-full font-bold p-2 bg-red-300 border rounded-md border-red-400 text-red-700 text-center capitalize">
          {message[0]}
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-60 font-semibold text-lg hover:bg-violet-500 h-12 rounded-3xl text-white bg-lila-dark hover:text-white transition-all duration-300 ease-in"
      >
        <SyncLoader
          color="#fff"
          loading={loading}
          size={24}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {loading ? null : "Continuar con email"}
      </Button>
    </form>
  );
}
