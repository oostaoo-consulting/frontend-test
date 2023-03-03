import styles from "./Timer.module.scss";

type Props = {
  timer: number;
  running: boolean;
  onStart: () => void;
};
function formatTime(time : number){
  let hours = Math.floor(time / 3600).toString();
  let minutes = Math.floor((time % 3600) / 60).toString();
  let seconds = (time % 60).toString();

  return [hours, minutes, seconds]
    .reduce((red: string[], el) => {
      return el.length < 2 ? red.concat(`0${el}`) : red.concat(el);
    }, [])
    .join(":");
}

const Timer = ({ running, timer, onStart }: Props)  => (
  <div className={styles.controls}>
    <button
      type="button"
      className={styles.controls__button}
      onClick={onStart}
      disabled={running}
    >
      START
    </button>

    <p className={styles.controls__timer}>{formatTime(timer)}</p>
  </div>
);

export default Timer;
