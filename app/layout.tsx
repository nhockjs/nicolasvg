import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.scss";
import "./styles/layout.scss";
import Image from "next/image";
import Nav from "@/app/components/Nav/Nav";

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
            <a href="/" className="layout__logo">
              <Image
                src="/imgs/ppic.jpg"
                alt="Nicolás Vanegas"
                className="global__ppic"
                width={30}
                height={30}
              />
              <div className="layout__tagline">
                <Image
                  src="/imgs/nicolasvg-1.png"
                  alt="Logo Nicolás vg"
                  width={80}
                  height={16.3}
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
        <section className="layout__content global__container">
          {children}
        </section>
        {/* FOOTER */}
        <br />
        <div className="global__hr"> </div>
        <footer className="layout__footer">
          Hecho por Nicolás VG con NextJS
        </footer>
      </body>
    </html>
  );
}
