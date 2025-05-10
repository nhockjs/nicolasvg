import Skills from "@/app/components/Skills/Skills";
import "./styles/home.scss";
import SubTitle from "@/app/components/SubTitle/SubTitle";
import Job, { JobProps } from "./components/Job/Job";
import Degree, { DegreeProps } from "./components/Degree/Degree";
import AllProjects from "./components/AllProjects/AllProjects";

const jobs: JobProps[] = [
  {
    id: 0,
    job: "Desarrollador Web",
    company: "vyte.com.co",
    from: "FEB 2024",
    to: "PRESENTE",
    imagePath: "icons/jobs/vyte.jpg",
  },
  {
    id: 1,
    job: "Diseñador UI/UX",
    company: "Indra / Ecopetrol",
    from: "SEP 2022",
    to: "FEB 2024",
    imagePath: "icons/jobs/ecopetrol.jpg",
  },
  {
    id: 2,
    job: "Líder de proyectos web",
    company: "Newrona",
    from: "MAY 2022",
    to: "OCT 2022",
    imagePath: "icons/jobs/newrona.jpg",
  },
  {
    id: 3,
    job: "Diseñador web UI/UX",
    company: "Newrona",
    from: "ENE 2021",
    to: "MAY 2022",
    imagePath: "icons/jobs/newrona.jpg",
  },
  {
    id: 4,
    job: "Administrador web",
    company: "Emporia CYA",
    from: "JUN 2019",
    to: "DIC 2019",
    imagePath: "icons/jobs/emporiacya.jpg",
  },
];

const degrees: DegreeProps[] = [
  {
    id: 0,
    degree: "Profesional en Diseño Digital",
    entity: "Unicolmayor",
    date: "2020",
    endType: "GRADUACIÓN",
    imagePath: "icons/jobs/unicolmayor.jpg",
  },
  {
    id: 1,
    degree: "JavaScript con NodeJS",
    entity: "Udemy",
    date: "2022",
    endType: "CURSO",
    imagePath: "icons/jobs/udemy.jpg",
  },
  {
    id: 2,
    degree: "Inglés",
    entity: "British Council",
    date: "2017",
    endType: "CURSO",
    imagePath: "icons/jobs/british.jpg",
  },
  {
    id: 3,
    degree: "Bachillerato Énfasis en Sistemas",
    entity: "Colegio HDD",
    date: "2015",
    endType: "GRADUACIÓN",
    imagePath: "icons/jobs/hdd.jpg",
  },
  {
    id: 4,
    degree: "Curso de Programación Básica",
    entity: "Plazi",
    date: "2021",
    endType: "CURSO",
    imagePath: "icons/jobs/platzi.jpg",
  },
];

export default function Home() {
  return (
    <main className="home__main">
      {/* SECCIÓN BANNER */}
      <section className="home__banner">
        <br />
        <h2>Nicolás Vanegas Garzón</h2>
        <h1>Desarrollador Web Next.js</h1>
        <div className="home__data">
          <img src="/icons/col.png" alt="Banderita de Colombia" />
          <p>Bogotá, Colombia</p>
          <span>| </span>
          <p>{new Date().getFullYear() - 1998} años</p>
        </div>
        <br />
        <a
          href="/documents/resume-es-0525.pdf"
          download="resume-es-0525.pdf"
          className="global__button"
        >
          <img src="/icons/pdf.svg" alt="Descargar PDF de CV" />
          Descargar CV
        </a>
        <br />
        <Skills />
      </section>
      <br />
      {/* SECCIÓN DE INFORMACIÓN GENERAL */}
      <div className="home__information">
        {/* SECCIÓN ABOUT */}
        <section className="home__about global__section">
          <SubTitle text="Sobre mí" imagePath="/gifs/brujula.webp" />
          <section className="global__innerSection">
            <p>
              Desarrollador web graduado de la Universidad Mayor de Cundinamarca
              como Diseñador Digital y Multimedia con conocimiento en Desarrollo
              Web FrontEnd. Amplia experiencia en diseño y desarrollo de
              interfaz y experiencia de usuario {`(Product Design)`}.
            </p>
          </section>
          <SubTitle text="Educación" imagePath="/gifs/book.webp" />
          {/* SECCIÓN EDUCACIÓN */}
          <section className="home__education global__innerSection">
            {degrees.map((degree) => (
              <Degree
                key={degree.id}
                degree={degree.degree}
                entity={degree.entity}
                date={degree.date}
                imagePath={degree.imagePath}
                endType={degree.endType}
              />
            ))}
          </section>
        </section>
        {/* SECCIÓN EXPERIENCIA */}
        <section className="home__xp global__section">
          <SubTitle text="Experiencia" imagePath="/gifs/xp.gif" />
          <section className="global__innerSection">
            {jobs.map((job) => (
              <Job
                key={job.id}
                job={job.job}
                company={job.company}
                from={job.from}
                to={job.to}
                imagePath={job.imagePath}
              />
            ))}
          </section>
        </section>
      </div>
      {/* SECCIÓN PROYECTOS DESTACADOS */}
      <AllProjects />
    </main>
  );
}
