import { Card, StateOfGame } from '../../types/Card';
import { RootState } from '../../store';

export const getCards = (state: RootState): Card[] => state.Card.cards;
export const getGameRecords = (state: RootState): StateOfGame => state.Card.records;
