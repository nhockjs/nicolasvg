"use client";
import React from "react";
import "./styles/home.scss";
import Image from "next/image";

interface skillsProps {
  id: number;
  name: string;
  icono: string;
}

const skills: skillsProps[] = [
  { id: 0, name: "HTML 5", icono: "html" },
  { id: 1, name: "CSS 3", icono: "css" },
  { id: 2, name: "JavaScript", icono: "js" },
  { id: 3, name: "NextJS", icono: "nextjs" },
  { id: 4, name: "TypeScript", icono: "typescript" },
  { id: 5, name: "ReactJS", icono: "react" },
  { id: 6, name: "Sass", icono: "sass" },
  { id: 7, name: "SEO", icono: "seo" },
  { id: 8, name: "UI/UX", icono: "uiux" },
  { id: 9, name: "WordPress", icono: "wordpress" },
];

let bookWidth = 80;
let translateWidth = `-${skills.length * bookWidth}px`;

console.log(translateWidth);

export default function HomePage() {
  return (
    <section className="home__body">
      <section className="home__aboutme">
        <div className="home__image">
          <Image
            src="/imgs/ppic.jpg"
            alt="Sobre Nicolás VG"
            width={50}
            height={50}
          />
          <div>
            <h1>Nicolás Vanegas Garzón</h1>
            <div className="home__data">
              <img src="/icons/col.png" alt="Banderita de Colombia" />
              <p>Bogotá, Colombia</p>
              <img src="/icons/age.png" alt="" />
              <p>{new Date().getFullYear() - 1998} años</p>
            </div>
          </div>
        </div>
        <br />
        <p>
          Desarrollador web graduado de la Universidad Mayor de Cundinamarca
          como Diseñador Digital y Multimedia con conocimiento en Desarrollo Web
          FrontEnd. Amplia experiencia en diseño y desarrollo de interfaz y
          experiencia de usuario {`(Product Design)`}.
        </p>
      </section>
      <hr />
      <h2>Habilidades técnicas</h2>

      <div className="home__skills--wrapper">
        <div
          className="home__skills--track"
          style={
            {
              "--translateWidth": translateWidth,
              "--bookWidth": bookWidth,
            } as React.CSSProperties
          }
        >
          {skills.map((x) => (
            <div className="home__book" key={x.id}>
              <img
                src={`/icons/skills/${x.icono}.png`}
                alt={`Conocimientos en ${x.name}`}
              />
              <span> {x.name} </span>
            </div>
          ))}

          {skills.map((x) => (
            <div className="home__book" key={x.id} aria-hidden="true">
              <img
                src={`/icons/skills/${x.icono}.png`}
                alt={`Conocimientos en ${x.name}`}
              />
              <span> {x.name} </span>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <section className="home__xp">
        <h2>Experiencia</h2>
        <section className="global__section">
          <div className="global__sectionTitle">
            <img src="icons/jobs/vyte.jpg" alt="Trabajo en vyte.com.co" />
            <div>
              <h3>
                Desarrollador Web | <b>vyte.com.co</b>
              </h3>
              <p>FEB 2024 - PRESENTE</p>
            </div>
          </div>
          <p>
            Como independiente: Diseño de producto, interfaz y experiencia de
            usuario. Desarrollo y planeación de productos web con diversas
            tecnologías. Montaje de websites desde 0 con hosting, dominio y
            desarrollo web con JavaScript / WordPress.
          </p>
        </section>
        <br />
        <section className="global__section">
          <div className="global__sectionTitle">
            <img
              src="icons/jobs/ecopetrol.jpg"
              alt="Trabajo en Indra y Ecopetrol"
            />
            <div>
              <h3>
                Diseñador UI/UX | <b>Indra / Ecopetrol</b>{" "}
              </h3>
              <p>SEP 2022 - FEB 2024</p>
            </div>
          </div>
          <p>
            Diseño y experiencia de usuario para espacios web internos y
            externos de Ecopetrol con Indra Colombia
          </p>
        </section>
        <br />
        <section className="global__section">
          <div className="global__sectionTitle">
            <img src="icons/jobs/newrona.jpg" alt="Trabajo en Newrona" />
            <div>
              <h3>
                Líder de proyectos web | <b>Newrona</b>
              </h3>
              <p>MAY 2022 - OCT 2022</p>
            </div>
          </div>
          <p>
            Dirección de proyectos de AR y VR con enfoque WebGL, empalme con
            diseño y desarrollo web.
          </p>
        </section>
        <br />
        <section className="global__section">
          <div className="global__sectionTitle">
            <img src="icons/jobs/newrona.jpg" alt="Trabajo en Newrona" />
            <div>
              <h3>
                Diseñador web UI/UX | <b>Newrona</b>
              </h3>
              <p>ENE 2021 - MAY 2022</p>
            </div>
          </div>
          <p>
            Diseño de producto digital enfocado en realidad virtual y realidad
            aumentada para diversas compañías latinoamericanas.
          </p>
        </section>
        <br />
        <section className="global__section">
          <div className="global__sectionTitle">
            <img src="icons/jobs/emporiacya.jpg" alt="Trabajo Emporia CYA" />
            <div>
              <h3>
                Administrador web | <b>Emporia CYA</b>
              </h3>
              <p>JUN 2019 - DIC 2019</p>
            </div>
          </div>
          <p>
            Administración web de campañas políticas en elecciones de alcaldes y
            gobernadores de Colombia 2019.
          </p>
        </section>
      </section>
      <br />
      <hr />
      <h2>Estudios</h2>
      <section className="global__section">
        <div className="global__sectionTitle">
          <img src="icons/jobs/unicolmayor.jpg" alt="Estudio en Unicolmayor" />
          <div>
            <h3>
              Profesional en Diseño Digital | <b>Unicolmayor</b>
            </h3>
            <p>GRADUACIÓN 2020</p>
          </div>
        </div>
      </section>
      <br />
      <section className="global__section">
        <div className="global__sectionTitle">
          <img src="icons/jobs/udemy.jpg" alt="Curso Udemy de NodeJS" />
          <div>
            <h3>
              JavaScript con NodeJS | <b>Udemy</b>
            </h3>
            <p>CURSO 2022</p>
          </div>
        </div>
      </section>
      <br />
      <section className="global__section">
        <div className="global__sectionTitle">
          <img src="icons/jobs/british.jpg" alt="Curso en el British Council" />
          <div>
            <h3>
              Inglés | <b>British Council</b>
            </h3>
            <p>CURSO 2017</p>
          </div>
        </div>
      </section>
      <br />
      <section className="global__section">
        <div className="global__sectionTitle">
          <img src="icons/jobs/hdd.jpg" alt="Colegio Hernando Duran Dussan" />
          <div>
            <h3>
              Bachillerato Énfasis en Sistemas | <b>Colegio HDD</b>
            </h3>
            <p>GRADUACIÓN 2015</p>
          </div>
        </div>
      </section>
    </section>
  );
}
