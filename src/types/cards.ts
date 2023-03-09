
export interface Card {
    id: number;
    imagePath: string;
    cardBackPath : string;
    isFlipped: boolean;
    isMatched: boolean;
  }
  
  export type CardsState = {
    cards: Card[];
    flipped: number[];
    matched: number[];
  }