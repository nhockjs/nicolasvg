import "./ProjectSingular.scss";

import { dataProps } from "../nuevo/addProject";

export default function ProjectSingular({ data }: { data: dataProps }) {
  const { title, id, thumbnail, description, skills, urlProject } = data;
  return (
    <section className="project__main global__innerSection">
      <div className="project__info">
        <div className="project__meta">
          <img src={thumbnail} alt={title} />
          <div>
            <h2>{title} </h2>
            <div className="project__skills">
              {skills.map((skill) => (
                <span key={skills.indexOf(skill)} className="project__skill">
                  {skill}
                </span>
              ))}{" "}
            </div>
          </div>
        </div>
        <p>{description}</p>
      </div>

      <a className="global__button" href={urlProject}>
        Ver proyecto
      </a>
    </section>
  );
}
