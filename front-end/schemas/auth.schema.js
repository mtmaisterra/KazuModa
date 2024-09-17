import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string()
    .email('Ingrese una dirección de correo valida')
    .required("Este campo es requerido"),
  password: yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}/,
      "La contraseña debe tener al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo"
    )
    .required("Este campo es requerido"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'La contraseña no coincide')
    .required('Este campo es requerido'),
  acceptTerms: yup.bool()
    .oneOf([true], 'Debes aceptar los términos y condiciones')
})


export const emailSchema = yup.object().shape({
  email: yup.string()
    .email("Ingrese un correo valido")
    .required("Este campo es requerido"),
  remember: yup.bool()
})


export const passwordSchema = yup.object().shape({
  password: yup.string()
    .required("Este campo es requerido"),
})