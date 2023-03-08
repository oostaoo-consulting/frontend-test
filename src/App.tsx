import Board from "./components/Board/Board";
import styles from "./App.module.scss";

let gameInterval: ReturnType<typeof setInterval>;

const App = () => {
  


  return (
    <main className={styles.game}>
      <div className={styles.app}>
        <Board />
      </div>

      
     
    </main>
  );
};

export default App;


