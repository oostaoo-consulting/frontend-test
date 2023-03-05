
export interface Card {
    id: number;
    imagePath: string;
    isFlipped: boolean;
  }
  
  export type CardsState = {
    cards: Card[];
    flipped: number[];
    matched: number[];
  }