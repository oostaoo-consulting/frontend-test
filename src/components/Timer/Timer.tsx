import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameStart, decrementTimer } from "../../redux/cards/cardsSlice";
import { RootState } from "../../redux/rootReducers";
import styles from "./Timer.module.scss";

/**
 * Timer that uses the useSelector and useDispatch hooks from the react-redux library 
 * to access the chronoTimer and isStartedGame values from the Redux store
 * @returns {any}
 */
const Timer = () => {
  const dispatch = useDispatch();
  const { chronoTimer, isStartedGame } = useSelector(
    (state: RootState) => state.cards
  ); //  setChronoTimer,  setGameStart
    

  useEffect(() => {
    if (chronoTimer === 0) {
      dispatch(setGameStart(0));
    }
    if (isStartedGame && chronoTimer > 0) {
      const timerId = setTimeout(() => {
        dispatch(decrementTimer());
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [isStartedGame, chronoTimer, dispatch]);
 
  return (
    <div className={styles.timer}>
      <h3>Remaining time :</h3>
      <p> {chronoTimer} s</p>
    </div>
  );
};

export default Timer;
