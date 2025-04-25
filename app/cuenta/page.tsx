"use client";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { logOutUser } from "./auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./auth.scss";

export default function Cuenta() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/cuenta/acceso");
      } else {
        console.log(user);
        setEmail(user.email ? user.email : "No tienes correo");
        setUsername(
          user.displayName ? user.displayName : "No tienes nombre de usuario"
        );
        return;
      }
    });
  }, []);
  return (
    <section className="auth__container">
      <h1>Hola{`, ${username}`} </h1>
      <p>
        <b>Email:</b> {email}
      </p>
      <br />
      <button onClick={logOutUser} className="auth__logout">
        Cerrar sesión
      </button>
    </section>
  );
}
