import CardReducer, { initialState } from '../../../src/reducers/CardReducer';
import { isCard, refreshCard, restartGame } from '../../../src/reducers/CardReducer/actions';

describe('CardReducer', () => {
  it('should return flip state by flipped true for given card id', () => {
    const result = CardReducer({ ...initialState }, isCard(initialState.cards[0].id));
    expect(result.cards[0].flipped).toBeTruthy();
  });

  it('should return refresh state by flipped true for given card id', () => {
    const updatedState = { ...initialState };
    updatedState.cards[0].flipped = true;
    updatedState.cards[1].flipped = true;
    updatedState.cards[2].flipped = true;
    const result = CardReducer(updatedState, refreshCard());
    const flippedCards = result.cards.filter((card) => card.flipped);
    expect(flippedCards).not.toHaveLength(3);
  });

  it('should return initialState when restart Game action called', () => {
    const updatedState = { ...initialState };
    updatedState.records.gameFinish = true;
    const result = CardReducer(updatedState, restartGame());
    expect(result.records.gameFinish).toBeFalsy();
  });

  it('should return default state when no action matched', () => {
    const result = CardReducer(undefined, { type: 'FLIP/NO_ACTION' });
    expect(result.cards.length).toBeGreaterThan(0);
  });
});
