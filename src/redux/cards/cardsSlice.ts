import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../../types/cards';

const cards: Card[] = [
  {
    id: 1,
    imagePath: "src/assets/images/cute-kitty-cat-head-1.png",
    isFlipped: false
  },
  {
    id: 2,
    imagePath: "src/assets/images/cute-kitty-cat-head-2.png",
    isFlipped: false
  },
  {
    id: 3,
    imagePath: "src/assets/images/cute-kitty-cat-head-3.png",
    isFlipped: false
  },
  {
    id: 4,
    imagePath: "src/assets/images/cute-kitty-cat-head-4.png",
    isFlipped: false
  },
  {
    id: 5,
    imagePath: "src/assets/images/cute-kitty-cat-head-5.png",
    isFlipped: false
  },
  {
    id: 6,
    imagePath: "src/assets/images/cute-kitty-cat-head-6.png",
    isFlipped: false
  },
  {
    id: 7,
    imagePath: "src/assets/images/cute-kitty-cat-head-7.png",
    isFlipped: false
  },
  {
    id: 8,
    imagePath: "src/assets/images/cute-kitty-cat-head-8.png",
    isFlipped: false
  }
]
interface CardsState {
  cards: Card[];
  flipped: number[];
  matched: number[];
}
const initialState: CardsState = {
  cards: cards,
  flipped: [],
  matched: [],
};



export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    flipCard: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.cards[index].isFlipped = !state.cards[index].isFlipped;
    },
    resetCards: (state) => {
      state.flipped = [];
      state.matched = [];
    },
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
    flipBackUnmatchedCards: (state) => {
      state.cards.forEach((card, index) => {
        if (state.flipped.includes(index) && !state.matched.includes(index)) {
          card.isFlipped = false;
        }
      });
      state.flipped = [];
    },
    matchCards: (state) => {
      state.flipped.forEach((flippedIndex) => {
        if (state.cards[flippedIndex].id === state.cards[state.flipped[0]].id) {
          state.matched.push(flippedIndex);
        }
      });
      state.flipped = [];
    },
    flipAllCards: (state) => {
      state.cards.forEach((card) => {
        card.isFlipped = true;
      });
    },
  },
  
});

export const { flipCard, resetCards, setCards, flipBackUnmatchedCards, matchCards, flipAllCards } = cardsSlice.actions;

export default cardsSlice.reducer;
