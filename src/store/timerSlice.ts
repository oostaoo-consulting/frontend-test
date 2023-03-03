import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  startTime: number;
  elapsedTime: number;
}

const initialState: TimerState = {
  startTime: 0,
  elapsedTime: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer(state) {
      state.startTime = Date.now();
    },
    updateElapsedTime(state) {
      state.elapsedTime = Date.now() - state.startTime;
    },
    resetTimer(state) {
      state.startTime = 0;
      state.elapsedTime = 0;
    },
  },
});

export const { startTimer, updateElapsedTime, resetTimer } = timerSlice.actions;

export default timerSlice.reducer;
