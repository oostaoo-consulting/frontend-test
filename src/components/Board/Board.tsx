import Card from '../Cards/Card';
import styles from './Board.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/rootReducers';
import { setCards, resetCards, flipCard, matchCards, flipBackUnmatchedCards} from '../../redux/cards/cardsSlice';


const Board = () => {
  const dispatch = useDispatch();
  const { cards, flipped, matched } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    dispatch(setCards(cards));
  }, [dispatch]);

 

  

  const handleCardClick = (index: number) => {
    if (flipped.length === 2) {
      return;
    }
    dispatch(flipCard(index));

    if (flipped.length === 1) {
      dispatch(matchCards());
    }
    setTimeout(() => {
      dispatch(flipBackUnmatchedCards());
    }, 1000);
  };

  const handleResetGame = () => {
    dispatch(resetCards());
    dispatch(setCards(cards));
  };

  const renderCards = () => {
    return 
  };
  return (
    <>
    <h1>Memory Game</h1>
    <ul className={styles.game__field}>
     
      {
        cards.map((card, index) => (
          <Card
            key={index}
            index={index}
            card={card}
            isFlipped={flipped.includes(index)}
            isMatched={matched.includes(index)}
            handleClick={handleCardClick}
          />
        ))
      }
     
    </ul>
     <button className="reset-button" onClick={handleResetGame}>
     Reset Game
   </button>
   </>
    
  );
};

export default Board;