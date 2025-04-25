import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.scss";
import "./styles/layout.scss";
import Image from "next/image";
import Link from "next/link";

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
      <body>
        <header className="layout__header">
          <div className="layout__header--content">
            <img
              src="/imgs/nicolasvg-1.png"
              alt="Nicolás VG"
              className="layout__logo"
            />
            <div>
              <Link className="layout__header__link" href="/cuenta">
                Mi cuenta
              </Link>
              <button className="layout__cta">Contactar</button>
            </div>
          </div>
        </header>
        <div className="layout__container">
          <nav className="layout__nav global__card">
            <Link href="/" className="layout__link">
              <Image
                src="/imgs/ppic.jpg"
                alt="Sobre Nicolás VG"
                width={50}
                height={50}
              />
              <span>Sobre mí</span>
            </Link>
            <Link href="/estudios" className="layout__link">
              <Image
                src="/icons/xp.png"
                alt="Experiencia laboral de Nicolás VG"
                width={50}
                height={50}
              />{" "}
              <span>Estudios</span>
            </Link>
            <Link href="/proyectos" className="layout__link">
              <Image
                src="/icons/projects.png"
                alt="Proyectos de Nicolás VG"
                width={50}
                height={50}
              />{" "}
              <span>Proyectos</span>
            </Link>
            <Link href="/laboratorio" className="layout__link">
              <Image
                src="/icons/laboratorio.png"
                alt="Widgets de práctica de Nicolás VG"
                width={50}
                height={50}
              />{" "}
              <span>Laboratorio</span>
            </Link>
            <Link href="/blog" className="layout__link">
              <Image
                src="/icons/blog.png"
                alt="Opiniones de Nicolás VG"
                width={50}
                height={50}
              />{" "}
              <span>Blog</span>
            </Link>
          </nav>
          <section className="layout__content global__card">{children}</section>
        </div>
        <footer className="layout__footer">
          Hecho por Nicolás VG con NextJS
        </footer>
      </body>
    </html>
  );
}
