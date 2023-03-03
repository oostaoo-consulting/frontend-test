import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import timerReducer from './timerSlice';
import progressBarReducer from './progressBarSlice';

const rootReducer = combineReducers({
  game: gameReducer,
  timer: timerReducer,
  progressBar: progressBarReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;