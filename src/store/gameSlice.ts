import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { shuffle } from '../utils/helpers';

interface Card {
  id: number;
  img: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface GameState {
  cards: Card[];
  flippedCards: Card[];
  matchedCards: Card[];
  attempts: number;
  progress: number;
}

const initialState: GameState = {
  cards: [],
  flippedCards: [],
  matchedCards: [],
  attempts: 0,
  progress: 0,
};

const cardImages = [
  'image1.png',
  'image2.png',
  'image3.png',
  'image4.png',
  'image5.png',
  'image6.png',
  'image7.png',
  'image8.png',
];

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    selectCards(state) {
      const selectedCards = cardImages.reduce((acc: Card[], img, i) => {
        const newCards = [
          {
            id: i * 2,
            img: `/assets/images/${img}`,
            isFlipped: false,
            isMatched: false,
          },
          {
            id: i * 2 + 1,
            img: `/assets/images/${img}`,
            isFlipped: false,
            isMatched: false,
          },
        ];
        return [...acc, ...newCards];
      }, []);

      state.cards = shuffle(Array.from(selectedCards));
    },

    flipCard(state, action: PayloadAction<number>) {
      const id = action.payload;
      const card = state.cards.find((card) => card.id === id);

      if (!card || card.isFlipped) {
        return;
      }

      card.isFlipped = true;
      state.flippedCards.push(card);

      if (state.flippedCards.length === 2) {
        state.attempts++;

        const [card1, card2] = state.flippedCards;

        if (card1.img === card2.img) {
          card1.isMatched = true;
          card2.isMatched = true;
          state.matchedCards.push(card1, card2);
        }

        state.flippedCards = [];
      }
    },

    hideCards(state) {
      state.cards.forEach((card) => {
        if (!card.isMatched) {
          card.isFlipped = false;
        }
      });

      state.flippedCards = [];
    },

    resetCards(state) {
      state.cards.forEach((card) => {
        card.isFlipped = false;
        card.isMatched = false;
      });

      state.cards = shuffle(state.cards);
      state.flippedCards = [];
      state.matchedCards = [];
      state.attempts = 0;
    },

    checkMatch(state) {
      const unmatchedCards = state.cards.filter((card) => !card.isMatched);

      const progress = ((cardImages.length - unmatchedCards.length) / cardImages.length) * 100;
      state.progress = Math.floor(progress);
    },
  },
});

export const { selectCards, flipCard, hideCards, resetCards, checkMatch } = gameSlice.actions;
export const selectGameState = (state: RootState) => state.game;
export default gameSlice.reducer;
