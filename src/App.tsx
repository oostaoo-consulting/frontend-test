import Board from "./components/Board/Board";
import styles from "./App.module.scss";
import { useCallback, useRef, useState } from "react";
import Timer from "./components/Timer/Timer";

let gameInterval: ReturnType<typeof setInterval>;

const App = () => {
  
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const runGame = () => {
    setRunning(true);
    gameInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };


  const endGame = useCallback(() => {
    clearInterval(gameInterval);
    setRunning(false);
   
    setTimer(0);
  }, [timer]);



  return (
    <main className={styles.game}>
      <div className={styles.app}>
        <Board />
      </div>

      
        <Timer running={running} onStart={runGame} timer={timer} />
        
    </main>
  );
};

export default App;


