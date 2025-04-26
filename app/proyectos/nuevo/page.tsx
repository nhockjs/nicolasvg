"use client";
import "../projects.scss";
import { addProject } from "./addProject";

const skills: string[] = [
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "NextJS",
  "TypeScript",
  "ReactJS",
  "Sass",
  "SEO",
  "UIUX",
  "WordPress",
];

export default function NuevoProyecto() {
  const handleCreateProject = async (formData: FormData) => {
    const title = formData.get("title") as string;
    //const thumbnail = formData.get("thumbnail") as File;
    const description = formData.get("description") as string;
    //const skills = formData.getAll("skills") as string[];
    const urlProject = formData.get("urlProject") as string;
    const data = { title, description, skills, urlProject };
    console.log(data);
    await addProject(data);
  };

  return (
    <div className="projects__formContainer">
      <h1 className="projects__title">Crear nuevo proyecto</h1>
      <hr />
      <form action={handleCreateProject}>
        <label htmlFor="title">Título de proyecto</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="thumbnail">Miniatura</label>
        <input type="file" id="thumbnail" name="thumbnail" />
        <label htmlFor="description">Descripción</label>
        <textarea id="description" name="description" />
        <label htmlFor="skills">Habilidades usadas</label>
        <section className="global__checkboxes">
          {skills.map((x) => (
            <div key={x} className="global__checkboxContainer">
              <input type="checkbox" name="skills" value={x} id={x} />
              <label htmlFor={x}>{x}</label>
            </div>
          ))}
        </section>
        <label htmlFor="urlProject">URL de proyecto</label>
        <input type="text" id="urlProject" name="urlProject" />
        <br />
        <button type="submit">Crear proyecto</button>
      </form>
    </div>
  );
}
