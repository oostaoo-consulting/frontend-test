import { useEffect, useState } from "react";
import "./TimerBar.scss";

export default function TimerBar({
  timerBar,
  setDefeatModal,
  setTimerBar,
  victoryModal,
}) {
  const [timer, setTimer] = useState(0);
  const max = 120;

  useEffect(() => {
    if (timer < max && timerBar) {
      const interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === max) {
      setTimer(0);
      setDefeatModal("active");
      setTimerBar(false);
    } else if (victoryModal === "active") {
      setTimer(0);
    }
  }, [timer, timerBar, setDefeatModal, setTimerBar, victoryModal]);

  return (
    timerBar && (
      <div className="timer-container">
        <div className="timer">
          <progress value={timer} max={max}></progress>
        </div>
      </div>
    )
  );
}
