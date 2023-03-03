import { combineReducers } from 'redux';
import gameReducer from './gameSlice';

const rootReducer = combineReducers({
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;