import Board from "./components/Board/Board";
import styles from "./App.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { CatsArray } from "./types";

import Controls from "./components/Timer/Timer";

import { catsIdArray, generateNumbers } from "./utils/setup";
import formatTime from "./utils/helpers";
import Timer from "./components/Timer/Timer";

let gameInterval: ReturnType<typeof setInterval>;

const App = () => {
  const [field, setField] = useState<CatsArray>([]);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [guessedCards, setGuessedCards] = useState(0);
  const [turnedValue, setTurnedValue] = useState<string>("");
  const [leaderBoard, setLeaderBoard] = useState<string[]>([]);
  const counter = useRef(0);

  const runGame = () => {
    setField(generateNumbers(catsIdArray));
    setRunning(true);
    gameInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const setValue = (value: string) => {
    if (!turnedValue || value !== turnedValue) {
      setTurnedValue(value);
      return;
    }
    setTimeout(() => removeCards(value), 100);
    setGuessedCards(guessedCards + 2);
  };

  const removeCards = (value: string) => {
    setField(
      field.reduce((red: CatsArray, el): CatsArray => {
        const val = el?.value === value ? null : el;
        return red.concat(val);
      }, [])
    );
  };

  const endGame = useCallback(() => {
    clearInterval(gameInterval);
    setRunning(false);
    setLeaderBoard((prevValue) => [...prevValue, formatTime(timer)]);
    setTimer(0);
    setGuessedCards(0);
  }, [timer]);

  useEffect(() => {
    setField(generateNumbers(catsIdArray));
  }, []);

  useEffect(() => {
    if (field.length > 0 && guessedCards === field.length) {
      endGame();
    }
  }, [guessedCards, field.length, endGame]);

  return (
    <main className={styles.game}>
      <div className={styles.app}>
        <Board
          cats={field}
          running={running}
          counter={counter}
          setValue={setValue}
        />
      </div>

      
        <Timer running={running} onStart={runGame} timer={timer} />
        
    </main>
  );
};

export default App;
