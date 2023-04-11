import { combineReducers } from '@reduxjs/toolkit';
import cardsReducer from './cards/cardsSlice';

const rootReducer = combineReducers({
  cards: cardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
