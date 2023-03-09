import Board from "../Board/Board";
import styles from "./App.module.scss";

/**
 * Description
 * @returns {any}
 */
const App = () => {
  return (
    <main className={styles.game} >
      <div className={styles.app} data-testid="app">
        <h1 className={styles["board-title"]} data-testid="board-title">
          Test Memory
        </h1>
        <Board />
      </div>
    </main>
  );
};

export default App;
