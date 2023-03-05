import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { Card as CardType } from '../../types/cards';
import { RootState } from '../../redux/rootReducers';
import BackCards from '../../assets/images/back-card.png'
interface CardProps {
  index: number;
  card: CardType;
  isFlipped: boolean;
  isMatched: boolean;
  handleClick: (index: number) => void;
}

const Card = ({ index, card, isFlipped, isMatched, handleClick }: CardProps) => {

  const cards = useSelector((state: RootState) => state.cards.cards);

  const cardClassName = `card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`;

  return (
    <div className={cardClassName} onClick={() => handleClick(index)}>
      <div className="card-front">
        <img src={card.imagePath } alt="card-front" />
      </div>
      <div className="card-back">
        <img src={BackCards} alt="card-back" />
      </div>
    </div>
  );
};

export default Card;
