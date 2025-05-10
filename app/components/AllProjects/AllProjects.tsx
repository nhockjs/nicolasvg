"use client";

import "./AllProjects.scss";
import { getAllProjects } from "./getAllProjects";

import { dataProps } from "./nuevo/addProject";
import { useEffect, useState } from "react";
import ProjectSingular from "./ProjectSingular/ProjectSingular";
import SubTitle from "../SubTitle/SubTitle";

export default function AllProjects() {
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
    <main className="global__section">
      <SubTitle text="Proyectos destacados" imagePath="/gifs/pico-e.webp" />
      <hr />
      <section className="projects__main" id="anchorProjects">
        {projects?.map((project) => (
          <ProjectSingular key={project.id} data={project} />
        ))}
      </section>
    </main>
  );
}
