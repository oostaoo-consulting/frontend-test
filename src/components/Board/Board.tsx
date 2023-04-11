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

// actions to state of game
const GameStatus = {
  NOT_STARTED: "not_started",
  STARTED: "started",
  WIN: "win",
  LOSE: "lose",
};

/**
 * Return Component Board Parent and child Card / Timer / ProgressBar
 * @returns {any}
 */
const Board = () => {
  const dispatch = useDispatch();
  const { cards, flippedCardIndexes, matchedCardIndexes } = useSelector(
    (state: RootState) => state.cards
  );
  let chronoTimer = useSelector((state: RootState) => state.cards.chronoTimer);
  const [gameStatus, setGameStatus] = useState(GameStatus.NOT_STARTED);
  const [isStartedGame, setIsStartedGame] = useState(false);
  const percent = (matchedCardIndexes.length / cards.length) * 100;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");


  useEffect(() => {
    dispatch(setCards(cards)); // initialize the cards
  }, [dispatch]);

  //checks if the status of the game is "STARTED",
  //and if it is, it creates a time interval that will execute the "decrementTimer"
  useEffect(() => {
    if (gameStatus === GameStatus.STARTED) {
      const intervalId = setInterval(() => {
        dispatch(decrementTimer());
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [dispatch, gameStatus]);

  // set the status of the game when the timer reaches 0.
  useEffect(() => {
    if (chronoTimer === 0) {
      setGameStatus(GameStatus.LOSE);
    }
  }, [chronoTimer]);

  // starts the game when you click on the first card
  const handleCardClick = (index: number) => {
    const flippedCount = flippedCardIndexes.length;

    // checks if two cards are returned
    if (flippedCount === 2) {
      return;
    }
   //Dispatch the flipCard action to flip the clicked card
    dispatch(flipCard(index));

    if (!isStartedGame) {
      setIsStartedGame(true);
      dispatch(setGameStart(true));
      setGameStatus(GameStatus.STARTED); //indicate that the player has started the game
    }
// If only one card is turned up, he checks to see if it
// matches another card turned up previously.
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
        if (matchedCardIndexes.length === 16) {
          setGameStatus(GameStatus.WIN);
        }
      }
    }
  };
/**
 * This function uses the dispatch to send actions to the Redux store
 * and reset Game
 * @returns {any}
 */
  const handleResetGame = () => {
    dispatch(resetCards());
    dispatch(setChronoTimer(60));
    setGameStatus(GameStatus.NOT_STARTED);
  };
// render cards 
  const renderCards = () => {
    return cards.map((card, index) => (
      <Card
        key={index}
        index={index}
        card={card}
        matchedCardIndexes={matchedCardIndexes}
        flippedCardIndexes={flippedCardIndexes}
        isFlipped={flippedCardIndexes.includes(index)}
        isMatched={matchedCardIndexes.includes(index) && !card.isMatched}
        handleClick={() => handleCardClick(index)}
      />
    ));
  };

// close Modal and reload the window
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
    window.location.reload();
  };

  return (
    <>
      <section className={styles["board"]} data-testid="board">
        <ul className={styles["board-controls"]}>{renderCards()}</ul>
        <ProgressBar percentGameComplete={percent} />
        <Timer />
        <button
          className={styles["reset-button"]}
          data-testid="reset-button"
          onClick={handleResetGame}
        >
          Reset Game
        </button>
        {gameStatus === GameStatus.WIN && (
          <Modal
            message="You Win! Congratulations!"
            onClose={handleCloseModal}
          />
        )}
        {gameStatus === GameStatus.LOSE && (
          <Modal
            message="You Lose! Better luck next time!"
            onClose={handleCloseModal}
          />
        )}
      </section>

      {isModalOpen && (
        <Modal message={modalMessage} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Board;
