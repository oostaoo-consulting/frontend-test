export interface CardType {
    id: number;
    frontImg: string;
    backImg: string;
    flipped: boolean;
    matched: boolean;
  }
  
  export interface GameState {
    cards: CardType[];
    selectedCards: CardType[];
    matchedCards: CardType[];
    attempts: number;
    time: number;
  }
  
  export interface TimerProps {
    time: number;
    onTimeOver: () => void;
  }
  
  export interface BoardProps {
    cards: CardType[];
    onCardClick: (card: CardType) => void;
  }
  
  export interface CardsProps {
    card: CardType;
    onCardClick: (card: CardType) => void;
  }
  
  export interface ProgressBarProps {
    progress: number;
  }
  
  export interface RootState {
    game: GameState;
  }