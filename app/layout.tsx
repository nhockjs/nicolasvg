import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.scss";
import "./styles/layout.scss";
import Link from "next/link";
import ButtonMenu from "@/components/Nav/ButtonMenu/ButtonMenu";
import Nav from "@/components/Nav/Nav";

const kanit = Kanit({
  weight: ["200", "400", "700"],
  variable: "--kanitFont",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nicolás VG",
  description: "Portafolio personal de Nicolás Vanegas Garzón",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.variable}>
        {/* HEADER */}
        <header className="layout__header">
          <div className="global__container layout__header__container">
            <a href="https://nicolasvg.com" className="layout__logo">
              <img
                src="/imgs/ppic.jpg"
                alt="Nicolás Vanegas"
                className="global__ppic"
              />
              <div className="layout__tagline">
                <img
                  src="/imgs/nicolasvg-1.png"
                  width="80"
                  alt="Logo Nicolás vg"
                />
                <p>Web Developer</p>
              </div>
            </a>
            <div className="layout__header__buttons">
              <button>Contactar</button>
              <Nav />
            </div>
          </div>
          <div className="global__hr layout__hr--header"> </div>
        </header>

        {/* CONTENIDO */}
        <section className="layout__content global__card">{children}</section>
        {/* FOOTER */}
        <div className="global__hr"> </div>
        <footer className="layout__footer">
          Hecho por Nicolás VG con NextJS
        </footer>
      </body>
    </html>
  );
}
