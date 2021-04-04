export interface Card {
  id: string;
  value: number;
  flipped?: boolean;
  matched?: boolean;
}

export interface StateOfGame {
  gameFinish: boolean;
  isWin: boolean;
  steps: number;
}

export type StateOfCard = {
  cards: Card[];
  records: StateOfGame;
};
