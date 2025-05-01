"use client";

import "./projects.scss";
import { getAllProjects } from "./getAllProjects";

import { dataProps } from "./nuevo/addProject";
import { useEffect, useState } from "react";

import Image from "next/image";

export default function Proyectos() {
  const [projects, setProjects] = useState<dataProps[] | null>([]);

  const fetchProjects = async () => {
    const data = await getAllProjects();

    // Mezclar aleatoriamente los proyectos (Fisher-Yates)
    const shuffled = [...data];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setProjects(shuffled);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  let projectKey = 0;

  return (
    <section>
      <h1>Proyectos</h1>
      {projects?.map((project) => (
        <section key={project.id + projectKey++}>
          <div className="projects__section">
            <img
              src={project.thumbnail || "/public/imgs/nicolasvg-1.png"}
              alt={project.title || "Proyecto de Nicolás VG"}
            />
            <div className="project__info">
              <h2>{project.title} </h2>
              <p> {project.description} </p>
            </div>
          </div>
          <div className="projects__bottom">
            <div className="project__skills">
              {project.skills.map((skill) => (
                <span
                  key={project.skills.indexOf(skill)}
                  className="project__skill"
                >
                  {" "}
                  {skill}{" "}
                </span>
              ))}
            </div>
            <a
              href={project.urlProject}
              target="_blank"
              className="project__skill"
            >
              Ver proyecto
            </a>
          </div>
          <hr />
        </section>
      ))}
    </section>
  );
}
