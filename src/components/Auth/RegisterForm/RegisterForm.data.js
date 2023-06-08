//importacin especial
//el asteritico me va a permitir
//traer todo lo refrente a yup y accedemos
//medante el alias
import * as Yup from "yup";
export const initialValues = () => {
  return {
    email: "",
    password: "",
    confirmPassword: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("El email no es correcto")
      .required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
    confirmPassword: Yup.string()
      .required("La contraseña es obligatoria")
      .oneOf([Yup.ref("password")], "Las contraseñas tienen que ser iguales"),
  });
};
