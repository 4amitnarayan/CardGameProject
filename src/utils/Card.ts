import { randomNumbers, shuffle } from '.';
import { StateOfCard, Card } from '../types/Card';

const CARD_PAIRS_VALUE = 6;

export const getCardList = (pair: number) => {
  const cardNumbers = randomNumbers(pair);
  const shuffledNumbers = shuffle(cardNumbers.concat(cardNumbers));
  return shuffledNumbers.map((value) => ({
    id: Math.random().toString(36).substr(2, 9),
    value,
  }));
};

export const getInitialState = (pair: number = CARD_PAIRS_VALUE) => {
  return {
    cards: getCardList(pair),
    records: {
      gameFinish: false,
      isWin: false,
      steps: 0,
    },
  };
};

export const getFlipState = (state: StateOfCard, cardId: string) => {
  return {
    ...state,
    cards: state.cards.map((card: Card) => {
      return {
        ...card,
        flipped: card.flipped || card.id === cardId,
      };
    }),
    records: {
      ...state.records,
      steps: state.records.steps + 1,
    },
  };
};

export const getRefreshState = (state: StateOfCard) => {
  const { cards } = state;
  const [card1, card2] = cards?.filter((card: Card) => card.flipped && !card.matched);
  const matched = card1?.value === card2?.value;
  const updatedState = {
    ...state,
  };

  if (card1 && card2) {
    const updatedCards = cards.map((card: Card) => {
      const freezed = matched && (card1?.id === card.id || card2?.id === card.id);
      return {
        ...card,
        flipped: card.matched || freezed,
        matched: card.matched || freezed,
      };
    });
    updatedState.cards = updatedCards;
  } else {
    const haveCardToMatch = cards.find((card) => !card.matched);
    if (!haveCardToMatch) {
      updatedState.records = {
        ...updatedState.records,
        gameFinish: true,
        isWin: true,
      };
    }
  }
  return updatedState;
};
