import { MutableRefObject, useEffect, useState } from 'react';

import { Cats} from '../../types';
import styles from './Card.module.scss';
//CardBack
import cardBackImage from "../../assets/images/back-card.png"
let timeout: ReturnType<typeof setTimeout>;

type Props = {
  icon: Cats;
  running: boolean;
  counter: MutableRefObject<number>;
  setValue: (value: string) => void;
};

const Card = ({
  icon,
  running,
  counter,
  setValue,
}: Props) => {
  const [turned, setTurned] = useState(false);

  const handleClick = () => {
    if (!running || counter.current > 1 || turned) return;
    setTurned(true);
    counter.current++;
    if (counter.current === 0) {
      timeout = setTimeout(() => {
        setTurned(false);
        setValue('');
        counter.current = 0;
      }, 5000);
    }
    setValue(icon.value);
  };

  useEffect(() => {
    if (counter.current > 1) {
      if (timeout) clearTimeout(timeout);
      setTimeout(() => {
        setTurned(false);
        setValue('');
        counter.current = 0;
      }, 400);
    }
  }, [setTurned, setValue, counter]);

  return (
    <li className={styles.card}>
      <div
        className={`${styles.card__inner} ${
          turned ? styles.card__inner_turned : null
        }`}
        onClick={handleClick}
      >
        <div className={styles.card__front}>
          <img src={icon.cat} alt={icon.value} className={styles.card__icon} />
        </div>
        <div className={styles.card__back}>
          <img src={cardBackImage} alt="backCard" />
        </div>
      </div>
    </li>
  );
};

export default Card;


