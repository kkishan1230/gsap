import stl from "./card.module.css";

type CardProps = {
  title: string;
  body: string;
  id: number;
};

const Card = ({ title, body, id }: CardProps) => {
  return (
    <div className={stl.cardContainer}>
      <h3>User id: {id}</h3>
      <h4>title: {title}</h4>
      <p>body: {body}</p>
    </div>
  );
};

export default Card;
