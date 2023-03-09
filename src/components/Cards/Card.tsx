import { Card as CardType } from "../../types/cards";

import styles from "./Card.module.scss";
interface CardProps {
  index: number;
  card: CardType;
  isFlipped: boolean;
  isMatched: boolean; 
  matchedCardIndexes: number[];
  flippedCardIndexes: number[];
  handleClick: (index: number) => void;
}

/**
 * Component Card 
 * @param {any} {index
 * @param {any} card
 * @param {CardProps} handleClick}
 * @returns {any}
 */
const Card = ({ index, card, handleClick, flippedCardIndexes }: CardProps) => {
  const cardClassName = `${styles.card} ${
    card.isFlipped ? styles.flipped : ""
  }  ${
    !card.isMatched && flippedCardIndexes.includes(index) ? styles.unmatched : ""
  }`; // to flip the cards

  return ( // return cards html 
    <li className={`${cardClassName} `} onClick={() => handleClick(index)} data-id={card.id}>
      <div className={`${styles["card-front"]} ${card.isFlipped ? '': styles.hidden } `}>
        <img src={card.imagePath} alt="card-front" />
      </div>
      <div className={`${styles["card-back"]} ${card.isFlipped ? styles.hidden : '' } `} >
      <img src={card.cardBackPath} alt="card-back" />
      </div>
  
    </li>
  );
};

export default Card;