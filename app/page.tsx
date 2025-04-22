import "./styles/home.scss";

export default function HomePage() {
  return (
    <section className="home__body">
      <section className="home__aboutme">
        <h1>Soy Nicolás Vanegas Garzón</h1>
        <p>
          Soy desarrollador web profesional con enfoque en el entorno
          JavaScript, con amplia experiencia en diseño UI/UX.
        </p>
      </section>
      <hr />
      <section className="home__skills">
        <h2>Habilidades técnicas</h2>
        <div className="home__skill">
          <img src="/icons/skills/html-css-js.png" alt="" />
          <p>
            <b>HTMl, CSS y JS: </b>Manjo la estructura vainilla del entorno web,
            lo que me permite una mejor adaptación a diferentes tecnologías.
          </p>
        </div>
        <div className="home__skill">
          <img src="/icons/skills/nextjs.png" alt="" />
          <p>
            <b>Next.JS: </b> Aprovecho las ventajas de Next.js para crear
            aplicaciones de alta calidad más rápidamente, aprovechando el fácil
            enrutamiento, el SSR, entre otras.
          </p>
        </div>
        <div className="home__skill">
          <img src="/icons/skills/typescript.png" alt="" />
          <p>
            <b>TypeScript: </b> Uso de TypeScript con interfaces y props
            personalizados para evitar errores complejos de solucionar en el
            futuro.
          </p>
        </div>
        <div className="home__skill">
          <img src="/icons/skills/react.png" alt="" />
          <p>
            <b>React: </b> Manejo de estado, efecto, y hooks generales para
            implementar interfaces funcionales.
          </p>
        </div>
        <div className="home__skill">
          <img src="/icons/skills/sass.png" alt="" />
          <p>
            <b>Sass: </b> Más que habilidad, es un gusto y preferencia para la
            organización de estilos.
          </p>
        </div>
        <div className="home__skill">
          <img src="/icons/skills/seo.png" alt="" />
          <p>
            <b>SEO: </b> Conocimientos de Meta Data e indexación correcta de
            sitios web con Google.
          </p>
        </div>
        <div className="home__skill">
          <img src="/icons/skills/uiux.png" alt="" />
          <p>
            <b>Diseño UI/UX: </b> Experiencia y desempeño en diseño de interfaz
            y experiencia de usuario, UI Kits, prototipos, wireframes, maquetas,
            diseño responsivo, etc.
          </p>
        </div>
        <div className="home__skill">
          <img src="/icons/skills/wordpress.png" alt="" />
          <p>
            <b>WordPress:</b>
            Amplia experiencia en WordPress para desarrollo ágil de sitios web.
            Manejo avanzado de Elementor Pro.
          </p>
        </div>
      </section>
      <hr />
      <section className="home__studies">
        <h2>Estudios</h2>
      </section>
    </section>
  );
}
