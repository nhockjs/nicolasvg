import "./Skills.scss";

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

//Para calibrarTempo, calcular Ancho de .skills__track - 30. Automatizar esto después jeje
let calibrateTempo = 47;
let translateWidth = `-${skills.length * calibrateTempo}px`;

export default function () {
  console.log("HOLAAAA" + translateWidth);
  return (
    <section className="skills__main">
      <div className="skills__wrapper">
        <div
          className="skills__track"
          style={
            {
              "--translateWidth": translateWidth,
              "--bookWidth": calibrateTempo,
            } as React.CSSProperties
          }
        >
          {skills.map((x) => (
            <div className="skills__book" key={x.id}>
              <img
                src={`/icons/skills/${x.icono}.png`}
                alt={`Conocimientos en ${x.name}`}
              />
              <span> {x.name} </span>
            </div>
          ))}

          {skills.map((x) => (
            <div className="skills__book" key={x.id} aria-hidden="true">
              <img
                src={`/icons/skills/${x.icono}.png`}
                alt={`Conocimientos en ${x.name}`}
              />
              <span> {x.name} </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
