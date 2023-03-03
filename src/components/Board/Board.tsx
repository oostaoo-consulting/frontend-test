import Card from '../Cards/Card';
import { MutableRefObject } from 'react';
import { CatsArray } from '../../types';

import styles from './Board.module.scss';

type Props = {
  cats: CatsArray;
  running: boolean;
  counter: MutableRefObject<number>;
  setValue: (value: string) => void;
};

const Board = (props: Props) => {
  const { cats, ...cardProps } = props;
  return (
    <ul className={styles.game__field}>
      {props.cats.map((el, i) =>
        el ? (
          <Card key={el.id} icon={el} {...cardProps} />
        ) : (
          <div key={i} />
        ),
      )}
    </ul>
    
  );
};

export default Board;