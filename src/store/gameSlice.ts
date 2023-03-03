import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Card = {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
};

interface GameInfo {
  gameStarted: boolean;
  gameOver: boolean;
}

interface GameState extends GameInfo {
  cards: Card[];
  currentPair: number[];
  score: number;
  isPlaying: boolean;
  timeRemaining: number;
}

const initialState: GameState = {
  cards: [],
  currentPair: [],
  score: 0,
  isPlaying: false,
  timeRemaining: 60,
  gameStarted: false,
  gameOver: false,
};


const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    flipCard(state, action: PayloadAction<number>) {
      const { cards, currentPair } = state;
      const index = action.payload;
    
      if (currentPair.length === 2) {
        return;
      }
    
      if (index < 0 || index > cards.length - 1) {
        return;
      }
    
      const card = cards[index];
    
      if (card.isFlipped) {
        return;
      }
    
      card.isFlipped = true;
      currentPair.push(index);
    
      if (currentPair.length === 2) {
        const card1 = cards[currentPair[0]];
        const card2 = cards[currentPair[1]];
    
        if (card1.value === card2.value) {
          card1.isMatched = true;
          card2.isMatched = true;
          state.score += 2;
        } else {
          setTimeout(() => {
            card1.isFlipped = false;
            card2.isFlipped = false;
          }, 1000);
        }
    
        state.currentPair = [];
      }
    },

    startGame(state) {
      state.isPlaying = true;
    },

    endGame(state) {
      state.isPlaying = false;
    },

    tick(state) {
      state.timeRemaining -= 1;
    },

    restartGame(state) {
      state.cards = []; // réinitialisé dans Board.tsx
      state.currentPair = []; // réinitialisé dans Board.tsx
      state.score = 0; // réinitialisé dans Board.tsx
      state.isPlaying = false; // réinitialisé dans Board.tsx
      state.timeRemaining = 60; // réinitialisé dans Board.tsx
    },
  },
});

export const { flipCard, startGame, endGame, tick, restartGame } = gameSlice.actions;

export default gameSlice.reducer;
