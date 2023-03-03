import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import '../styles/progressBar.scss';

const ProgressBar = () => {
  const progress = useSelector((state: RootState) => state.game.progress);
  const color =
    progress < 25
      ? 'red'
      : progress < 50
      ? 'orange'
      : progress < 75
      ? 'yellow'
      : progress < 100
      ? 'green'
      : 'blue';

  return <div className={`progressBar ${color}`} style={{ width: `${progress}%` }} />;
};

export default ProgressBar;