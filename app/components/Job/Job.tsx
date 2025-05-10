import "./Job.scss";

export interface JobProps {
  id?: number;
  job: string;
  company: string;
  from: string;
  to: string;
  imagePath: string;
}

export default function Job({
  id,
  job,
  company,
  from,
  to,
  imagePath,
}: JobProps) {
  return (
    <section className="job__main">
      <img src={imagePath} alt={`Trabajo en ${company}`} />
      <div className="job__text">
        <h4>
          {job} | <b>{company}</b>
        </h4>
        <span>
          {from} - {to}
        </span>
      </div>
    </section>
  );
}
