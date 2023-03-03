import { FC } from "react";
import './ProgressBar.scss'

interface ProgressBarProps {
  percentComplete: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ percentComplete }) => {
  const progressBarColor = () => {
    if (percentComplete > 50) {
      return "green";
    } else if (percentComplete > 25) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div className="progress-bar-container">
      <div
        className={`progress-bar progress-bar-${progressBarColor()}`}
        style={{ width: `${percentComplete}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

