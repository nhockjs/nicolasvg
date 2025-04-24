"use client";
import React from "react";
import "./styles/home.scss";

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
        <h1>Soy Nicolás Vanegas Garzón</h1>
        <div className="home__data">
          <img src="/icons/col.png" alt="Banderita de Colombia" />
          <p>Bogotá, Colombia</p>
          <img src="/icons/age.png" alt="" />
          <p>{new Date().getFullYear() - 1998} años</p>
        </div>
        <p>
          Soy desarrollador web profesional con enfoque en el entorno
          JavaScript, con más de {new Date().getFullYear() - 2019} años de
          experiencia en diseño y desarrollo web.
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
            <img src="icons/jobs/vyte.jpg" alt="Trabajo de Freelancer" />
            <div>
              <h3>Freelancer</h3>
              <p>FEB 2024 - PRESENTE</p>
            </div>
          </div>
          <p>
            Venta y desarrollo web fullStack en diversas modalidades y
            tecnologías, principalmente WordPress
          </p>
        </section>
        <br />
        <section className="global__section">
          <div className="global__sectionTitle">
            <img src="icons/jobs/ecopetrol.jpg" alt="Trabajo de Freelancer" />
            <div>
              <h3>Ecopetrol</h3>
              <p>SEP 2022 - FEB 2024</p>
            </div>
          </div>
          <p>
            Diseño y experincia de usuario para productos web internos y página
            principal de Ecopetrol con Indra Colombia.
          </p>
        </section>
        <br />
        <section className="global__section">
          <div className="global__sectionTitle">
            <img src="icons/jobs/newrona.jpg" alt="Trabajo de Freelancer" />
            <div>
              <h3>Newrona Project Leader</h3>
              <p>MAY 2022 - NOV 2022</p>
            </div>
          </div>
          <p>
            Dirección de proyectos de realidad aumentada con enfoque WebGL,
            empalme con diseño y desarrollo web.
          </p>
        </section>
        <br />
        <section className="global__section">
          <div className="global__sectionTitle">
            <img src="icons/jobs/newrona.jpg" alt="Trabajo de Freelancer" />
            <div>
              <h3>Newrona Web UI/UX</h3>
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
            <img src="icons/jobs/emporiacya.jpg" alt="Trabajo de Freelancer" />
            <div>
              <h3>Web en Emporia CYA</h3>
              <p>JUN 2019 - DIC 2019</p>
            </div>
          </div>
          <p>
            Administración web de campañas políticas en elecciones de alcaldes y
            gobernadores de Colombia2019.
          </p>
        </section>
      </section>
      <br />
      <hr />
      <h2>Estudios</h2>
      <section className="global__section">
        <div className="global__sectionTitle">
          <img src="icons/jobs/unicolmayor.jpg" alt="Trabajo de Freelancer" />
          <div>
            <h3>Profesional en Diseño Digital y Multimedia</h3>
            <p>PROMOCIÓN 2020</p>
          </div>
        </div>
      </section>
      <br />
      <section className="global__section">
        <div className="global__sectionTitle">
          <img src="icons/jobs/hdd.jpg" alt="Trabajo de Freelancer" />
          <div>
            <h3>Colegio Hernando Durán Dussán</h3>
            <p>PROMOCIÓN 2015</p>
          </div>
        </div>
      </section>
    </section>
  );
}
