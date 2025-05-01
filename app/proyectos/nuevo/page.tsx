"use client";
import { useState } from "react";
import "../projects.scss";
import { addProject } from "./addProject";
import { saveAndConvertThumbnail } from "./createThumbnail";

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
  "Premio",
  "Unity",
];

export default function NuevoProyecto() {
  const [resultMsg, setResultMsg] = useState("");
  const [resultModifier, setResultModifier] = useState("");

  const handleCreateProject = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const id = `${title}-${Math.floor(Math.random() * 999)}`;
    const thumbnail = formData.get("thumbnail") as File;
    const description = formData.get("description") as string;
    const thumbnailUrl = await saveAndConvertThumbnail(thumbnail, id);
    const skills = formData.getAll("skills") as string[];
    const urlProject = formData.get("urlProject") as string;
    const data = { title, id, thumbnailUrl, description, skills, urlProject };
    console.log(data);
    await addProject(data);
    setResultModifier("--success");
    setResultMsg("¡Proyecto creado exitosamente!");
  };

  return (
    <div className="projects__formContainer">
      <h1 className="projects__title">Crear nuevo proyecto</h1>
      <hr />
      <form
        action={handleCreateProject}
        onSubmit={() => {
          setResultMsg("Cargando...");
          setResultModifier("--loading");
        }}
      >
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
      <p className={`projects__resultMsg projects__resultMsg${resultModifier}`}>
        {resultMsg}
      </p>
    </div>
  );
}
