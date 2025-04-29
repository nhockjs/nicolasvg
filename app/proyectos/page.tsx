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
    setProjects(data);
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
          <hr />
        </section>
      ))}
    </section>
  );
}
