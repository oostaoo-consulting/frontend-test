import Card from '../Cards/Card';
import styles from './Board.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/rootReducers';
import { setCards, resetCards, flipCard, matchedCards, flipBackUnmatchedCards} from '../../redux/cards/cardsSlice';
// import {useShuffle }from '../hooks/useShuffleArray';
import ProgressBar from '../ProgressBar/ProgressBar';


const Board = () => {
  const dispatch = useDispatch();
  const { cards, flippedCardIndexes, matchedCardIndexes } = useSelector((state: RootState) => state.cards);

 
const pourcentage = (matchedCardIndexes.length/8)*10; 
console.log(pourcentage)
  useEffect(() => {
    dispatch(setCards(cards)); // initialiser les cartes avec les cartes mélangées
  }, [dispatch]);


  const handleClick = (index: number) => {
    const flippedCount = flippedCardIndexes.length;
  
    if (flippedCount === 2) {
      return;
    }
  
    dispatch(flipCard(index));
  
    if (flippedCount === 1) {
      const [firstIndex] = flippedCardIndexes;
      const isFirstCardMatched = matchedCardIndexes.includes(cards[firstIndex].id);
  
      if (isFirstCardMatched || cards[firstIndex].id !== cards[index].id) {
        setTimeout(() => {
          dispatch(flipBackUnmatchedCards());
        }, 1000);
      } else {
        dispatch(matchedCards());
      }
    }
  };


  const handleResetGame = () => {
    dispatch(resetCards());
  };

  const renderCards = () => {
    return  cards.map((card, index) => (
      <Card
        key={index}
        index={index}
        card={card}
        isFlipped={true}
        isMatched={matchedCardIndexes.includes(index)}
       handleClick={() => handleClick(index)}
      />
    ))
  };
  return (
    <>
    <main className={styles['board']}>
    
    <h1 className={styles['board-title']}>Memory Game</h1>
    
    <ul className={styles['board-controls']}>
     
      {renderCards()}
     
    </ul>
    <ProgressBar percentComplete={pourcentage}/>
     <button className={styles['reset-button']} onClick={handleResetGame}>
     Reset Game
   </button>
   </main>
   </>
    
  );
};

export default Board;