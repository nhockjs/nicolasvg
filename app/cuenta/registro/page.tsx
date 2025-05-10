"use client";
import Link from "next/link";
import { createUser } from "./createUser";
import "../cuenta.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Registro() {
  const [error, setError] = useState<null | string>(null);
  const router = useRouter();

  const handleAuth = async (formData: FormData) => {
    const password = formData.get("password") as string;
    const copyPassword = formData.get("copyPassword") as string;

    if (password !== copyPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const verifyUserCreation = await createUser(formData);
    if (verifyUserCreation.userAllRight) {
      setError(null);
      console.log("Registro exitoso");
      router.push("/cuenta");
    } else {
      let errorMsg;

      switch (verifyUserCreation.code) {
        case "auth/email-already-exists":
          errorMsg = "Este correo ya está en uso.";
          break;
        case "auth/invalid-email":
          errorMsg = "El correo no es válido.";
          break;
        case "auth/invalid-password":
          errorMsg = "La contraseña debe tener mínimo 6 caracteres.";
          break;
        case "auth/uid-already-exists":
          errorMsg = "Este UID ya está registrado.";
          break;
        case "auth/invalid-uid":
          errorMsg = "El UID no es válido.";
          break;
        default:
          errorMsg = verifyUserCreation.code;
      }
      setError(errorMsg);
    }
  };

  return (
    <section className="auth__main global__section">
      <h1>Registrarse </h1>
      <hr />
      <form action={handleAuth} className="auth__form">
        <label htmlFor="username">Usuario</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="copyPassword">Confirmar contraseña</label>
        <input type="password" name="copyPassword" id="copyPassword" />
        <p>
          Estos datos serán usados exclusivamente para propósitos de
          aprendizaje.
        </p>
        <p className="auth__error"> {error} </p>
        <button type="submit">Registrarse</button>
      </form>
      <hr />
      <Link className="auth__link" href="/cuenta/acceso">
        Iniciar sesión
      </Link>
    </section>
  );
}
