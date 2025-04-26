"use client";
import Link from "next/link";
import { loginUser } from "./login";
import "../cuenta.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Acceso() {
  const [error, setError] = useState<null | string>(null);
  const router = useRouter();

  const handleLogin = async (formData: FormData) => {
    const password = formData.get("password") as string;
    const copyPassword = formData.get("copyPassword") as string;

    if (copyPassword && password !== copyPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const verifyUserLogin = await loginUser(formData);

    if (verifyUserLogin.userAllRight) {
      setError(null);
      console.log("Login exitoso");
      router.push("/cuenta");
    } else {
      let errorMsg;

      switch (verifyUserLogin.code) {
        case "auth/user-not-found":
          errorMsg = "Este usuario no está registrado.";
          break;
        case "auth/wrong-password":
          errorMsg = "La contraseña es incorrecta.";
          break;
        case "auth/too-many-requests":
          errorMsg = "Demasiados intentos. Intenta más tarde.";
          break;
        case "auth/invalid-email":
          errorMsg = "El correo ingresado no es válido.";
          break;
        case "auth/user-disabled":
          errorMsg = "Este usuario ha sido deshabilitado.";
          break;
        default:
          errorMsg = verifyUserLogin.code;
      }

      console.log(
        "Error en login: " +
          verifyUserLogin.code +
          " - " +
          verifyUserLogin.message
      );
      setError(errorMsg);
    }
  };

  return (
    <section className="auth__container">
      <h1>Iniciar sesión </h1>
      <hr />
      <form action={handleLogin} className="auth__form">
        <label htmlFor="email">Correo electrónico</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="email">Contraseña</label>
        <input type="password" name="password" id="password" />

        <p>
          Estos datos serán usados exclusivamente para propósitos de
          aprendizaje.
        </p>
        <button type="submit">Iniciar sesión</button>
      </form>
      <hr />
      <Link className="auth__link" href="/cuenta/registro">
        Registrarse
      </Link>
    </section>
  );
}
