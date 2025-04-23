import "./estudios.scss";

export default function Proyectos() {
  return (
    <section>
      <h1>Estudios</h1>
      <section className="home__xp">
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
            gobernadores de Colombia 2019.
          </p>
        </section>
      </section>
    </section>
  );
}
