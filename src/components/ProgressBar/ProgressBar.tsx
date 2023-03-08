import { FC } from "react";
import styles from './ProgressBar.module.scss'

interface ProgressBarProps {
  percentComplete: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ percentComplete }) => {
  const progressBarColor = () => {
    if (percentComplete > 80) {
      return "_green";
    } else if (percentComplete > 66) {
      return "_orange";
    } else if (percentComplete > 33) {
      return "_yellow";
    } else {
      return "_red";
    }
  };
  return (
    <div className={styles.progress_bar_container}>
      <div
        className={`${styles.progress_bar} `}
        style={{ width: `${percentComplete}%`, backgroundColor:`${progressBarColor}`}}
      ></div>
    </div>
  );
};

export default ProgressBar;

