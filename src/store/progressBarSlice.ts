import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ProgressBarState {
  value: number;
}

const initialState: ProgressBarState = {
  value: 0,
};

export const progressBarSlice = createSlice({
  name: 'progressBar',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < 100) {
        state.value += 10;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, reset } = progressBarSlice.actions;

export const selectProgressBarValue = (state: RootState) => state.progressBar.value;

export default progressBarSlice.reducer;
