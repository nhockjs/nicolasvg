"use client";
import Link from "next/link";
import { createUser } from "../auth";
import "../auth.scss";

export default function Login() {
  return (
    <section className="auth__container">
      <h1>Iniciar sesión </h1>
      <hr />
      <form className="auth__form">
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
      <Link href="/login"></Link>
    </section>
  );
}
