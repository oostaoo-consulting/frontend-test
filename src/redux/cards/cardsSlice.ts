import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../types/cards";
import { shuffleCards } from "../../utils/setup";
const CardsArray: Card[] = [
  {
    id: 1,
    imagePath: "src/assets/images/cute-kitty-cat-head-1.png",
    cardBackPath :"src/assets/images/back-card.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 2,
    imagePath: "src/assets/images/cute-kitty-cat-head-2.png",
    cardBackPath :"src/assets/images/back-card.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 3,
    imagePath: "src/assets/images/cute-kitty-cat-head-3.png",
    cardBackPath :"src/assets/images/back-card.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 4,
    imagePath: "src/assets/images/cute-kitty-cat-head-4.png",
    cardBackPath :"src/assets/images/back-card.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 5,
    imagePath: "src/assets/images/cute-kitty-cat-head-5.png",
    cardBackPath :"src/assets/images/back-card.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 6,
    imagePath: "src/assets/images/cute-kitty-cat-head-6.png",
    cardBackPath :"src/assets/images/back-card.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 7,
    imagePath: "src/assets/images/cute-kitty-cat-head-7.png",
    cardBackPath :"src/assets/images/back-card.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 8,
    imagePath: "src/assets/images/cute-kitty-cat-head-8.png",
    cardBackPath :"src/assets/images/back-card.png",
    isFlipped: false,
    isMatched: false
  },
];
interface CardsState {
  cards: Card[];
  flippedCardIndexes: number[];
  matchedCardIndexes: number[];
}



const initialState: CardsState = {
  cards: CardsArray,
  flippedCardIndexes: [],
  matchedCardIndexes: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    flipCard: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const isFlipped = state.cards[index].isFlipped;
      if (!isFlipped && state.flippedCardIndexes.length < 2) {
        state.cards[index].isFlipped = true;
        state.flippedCardIndexes.push(index);
      }
    },
    resetCards: (state) => {
      state.cards.forEach((card) => {
        card.isFlipped = false;
        card.isMatched = false;
      });
      state.flippedCardIndexes = [];
      state.matchedCardIndexes = [];
    },
    setCards: (state, action: PayloadAction<Card[]>) => {
      // Créer des cartes uniques à partir de `action.payload`
      const uniqueCards = action.payload.map((card, index) => {
        return {
          ...card,
          id: index + 1, // IDs uniques allant de 1 à 8
        };
      });
    
      // Créer des paires de cartes
      const cardPairs = [...uniqueCards, ...uniqueCards];
    
      // Mélanger les cartes pour obtenir un ordre aléatoire
      const shuffledCards = shuffleCards(cardPairs);
    
      state.cards = shuffledCards;
    },
    flipBackUnmatchedCards: (state) => {
      state.cards.forEach((card, index) => {
        if (state.flippedCardIndexes.includes(index) && !state.matchedCardIndexes.includes(index)) {
          card.isFlipped = false;
        }
      });
      state.flippedCardIndexes = [];
    },
    matchedCards: (state) => {
      const flippedCards = state.flippedCardIndexes.map((index) => state.cards[index]);
      if (flippedCards[0].id === flippedCards[1].id) {
        flippedCards.forEach((card) => {
          state.matchedCardIndexes.push(card.id);
        });
      }
      state.flippedCardIndexes = [];
    },
    flipAllCards: (state) => {
      state.cards.forEach((card) => {
        card.isFlipped = true;
      });
    },
  },
});

export const {
  flipCard,
  resetCards,
  setCards,
  flipBackUnmatchedCards,
  matchedCards,
  flipAllCards,
} = cardsSlice.actions;

export default cardsSlice.reducer;
