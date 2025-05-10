import "./Degree.scss";

export interface DegreeProps {
  id?: number;
  degree: string;
  entity: string;
  date: string;
  imagePath: string;
  endType: string;
}

export default function Degree({
  id,
  degree,
  entity,
  date,
  imagePath,
  endType,
}: DegreeProps) {
  return (
    <section className="degree__main">
      <img src={imagePath} alt={degree} />
      <div className="degree__info">
        <h4>{degree}</h4>
        <span>
          <span>
            {endType} {date} ■
          </span>
          <span> {entity} </span>
        </span>
      </div>
    </section>
  );
}
