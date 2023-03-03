import card1 from "./assets/images/cute-kitty-cat-head-1.png";
import card2 from "./assets/images/cute-kitty-cat-head-2.png";
import card3 from "./assets/images/cute-kitty-cat-head-3.png";
import card4 from "./assets/images/cute-kitty-cat-head-4.png";
import card5 from "./assets/images/cute-kitty-cat-head-5.png";
import card6 from "./assets/images/cute-kitty-cat-head-6.png";
import card7 from "./assets/images/cute-kitty-cat-head-7.png";
import card8 from "./assets/images/cute-kitty-cat-head-8.png";
//CardBack
import cardBack from "./assets/images/back-card.png"

export type CardType = {
  id: string;
  isFlipped: boolean;
  backImg: string;
  frontImg: string;
  isClickable: boolean;
  isMatchingCardId: string;
};

export const cards: string[] = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
];
export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, index) => ({
    id: `card${index}`,
    isFlipped: false,
    backImg: cardBack,
    frontImg: card,
    isClickable: true,
    isMatchingCardId:
      index < card.length
        ? `card${index + cards.length}`
        : `card${index - cards.length}`,
  }));

export const shuffle = (array: any[]): any => {
  return array
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
};
