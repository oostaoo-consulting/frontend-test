import { Card as CardType } from "../../types/cards";

import styles from "./Card.module.scss";
interface CardProps {
  index: number;
  card: CardType;
  isFlipped: boolean;
  isMatched: boolean;
  handleClick: (index: number) => void;
}

const Card = ({ index, card, handleClick }: CardProps) => {
  const cardClassName = `${styles.card} ${
    card.isFlipped ? styles.flipped : ""
  }`;

  return (
    <li className={cardClassName} onClick={() => handleClick(index)}>
      <div className={`${styles["card-front"]} ${card.isFlipped ? "" : styles.hidden}`}>
        <img src={card.imagePath} alt="card-front" />
      </div>
      <div className={`${styles["card-back"]} ${card.isFlipped ? styles.hidden :"" }`} >
      <img src={card.cardBackPath} alt="card-front" />
      </div>
  
    </li>
  );
};

export default Card;