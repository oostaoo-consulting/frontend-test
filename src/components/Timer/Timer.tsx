import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../../store/gameSlice';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(60);
  const dispatch = useDispatch();

  useEffect(() => {
    if (seconds === 0) {
      dispatch(resetGame());
    }

    const timer = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, dispatch]);

  return (
    <div className="timer">
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;