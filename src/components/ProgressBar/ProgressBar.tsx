import { FC } from "react";
import styles from './ProgressBar.module.scss'

interface ProgressBarProps {
  percentGameComplete: number;
}

/**
 * that receives a percentGameComplete prop, 
 * which is a number representing the percentage of completion of a game
 * @param {number} {percentGameComplete}
 * @returns {any}
 */
const ProgressBar: FC<ProgressBarProps> = ({ percentGameComplete }) => {
  const progressBarColor = () => {
    if (percentGameComplete >= 70) {
      return styles._green;
    } else if (percentGameComplete >= 40) {
      return styles._orange;
    } else if (percentGameComplete >= 20) {
      return styles._yellow;
    } else {
      return styles._red;
    }
  };
  return (
    <div className={styles.progress_bar_container}>
      <div
        className={`${styles.progress_bar} ${progressBarColor()}`}
        style={{ width: `${percentGameComplete}%`}}
        data-testid="progress_bar"
      ></div>
    </div>
  );
};

export default ProgressBar;

