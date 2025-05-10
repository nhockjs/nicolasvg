import "./SubTitle.scss";

interface SubTitleProps {
  imagePath?: string;
  text: string;
}
export default function SubTitle({ imagePath, text }: SubTitleProps) {
  return (
    <div className="home__title">
      {imagePath ? (
        <img src={imagePath} alt={text} />
      ) : (
        <img src="/icons/xp.png" alt={text} />
      )}
      <h3>{text} </h3>
    </div>
  );
}
