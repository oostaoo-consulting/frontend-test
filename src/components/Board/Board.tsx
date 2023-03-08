import Card from "../Cards/Card";
import styles from "./Board.module.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducers";
import Timer from "../Timer/Timer";
import {
  setCards,
  resetCards,
  flipCard,
  matchedCards,
  flipBackUnmatchedCards,
  setGameStart,
  setChronoTimer,
  decrementTimer,
} from "../../redux/cards/cardsSlice";

import ProgressBar from "../ProgressBar/ProgressBar";
import Modal from "../Modal/Modal";

const GameStatus = {
  NOT_STARTED: "not_started",
  STARTED : "started",
  WIN: "win",
  LOSE: "lose",
};

const Board = () => {
  const dispatch = useDispatch();
  const { cards, flippedCardIndexes, matchedCardIndexes} =
    useSelector((state: RootState) => state.cards);
    let chronoTimer =  useSelector((state: RootState) => state.cards.chronoTimer);
    const [gameStatus, setGameStatus] = useState(GameStatus.NOT_STARTED);
  const [isStartedGame, setIsStartedGame] = useState(false);
  const pourcentage = (matchedCardIndexes.length / 8) * 10;

  useEffect(() => {
    dispatch(setCards(cards)); // initialiser les cartes
  }, [dispatch]);

  useEffect(() =>{
    if(gameStatus === GameStatus.STARTED){
      const intervalId = setInterval(()=>{
        dispatch(decrementTimer());
      }, 1000); 
      return () => clearInterval(intervalId)
    }
  },[dispatch, gameStatus]); 

  useEffect(()=>{
    if(chronoTimer === 0){
      setGameStatus(GameStatus.LOSE); 
    }
  }, [chronoTimer]); 


  const handleClick = (index: number) => {
    const flippedCount = flippedCardIndexes.length;

    if (flippedCount === 2) {
      return;
    }

    dispatch(flipCard(index));

    if (!isStartedGame) {
      setIsStartedGame(true);
      dispatch(setGameStart(true));
      setGameStatus(GameStatus.STARTED); 
    }

    if (flippedCount === 1) {
      const [firstIndex] = flippedCardIndexes;
      const isFirstCardMatched = matchedCardIndexes.includes(
        cards[firstIndex].id
      );

      if (isFirstCardMatched || cards[firstIndex].id !== cards[index].id) {
        setTimeout(() => {
          dispatch(flipBackUnmatchedCards());
        }, 1000);
      } else {
        dispatch(matchedCards());
        if (matchedCardIndexes.length === 8) {
          setGameStatus(GameStatus.WIN);
        }
      }
    }
  };

  const handleResetGame = () => {
    dispatch(resetCards());
    dispatch(setChronoTimer(60)); 
    setGameStatus(GameStatus.NOT_STARTED)
    
  };

  const renderCards = () => {
    return cards.map((card, index) => (
      <Card
        key={index}
        index={index}
        card={card}
        isFlipped={true}
        isMatched={matchedCardIndexes.includes(index)  && !card.isMatched}
        handleClick={() => handleClick(index)}
      />
    ));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
    window.location.reload();
  };



  return (
    <>
      <main className={styles["board"]}>
        <h1 className={styles["board-title"]}>Memory Game</h1>

        <ul className={styles["board-controls"]}>{renderCards()}</ul>
        <ProgressBar percentComplete={pourcentage} />
        <Timer />
        <button className={styles["reset-button"]} onClick={handleResetGame}>
          Reset Game
        </button>
        {gameStatus === GameStatus.WIN && (
          <Modal message="You Win! Congratulations!" onClose={handleCloseModal} />
        )}
        {gameStatus === GameStatus.LOSE && (
          <Modal message="You Lose! Better luck next time!" onClose={handleCloseModal} />
        )}
      </main>

      {isModalOpen && (
        <Modal message={modalMessage} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Board;
