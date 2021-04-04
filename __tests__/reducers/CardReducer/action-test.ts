import {
  GAME_CARD,
  REFRESH_CARD,
  RESTART_GAME,
  isCard,
  refreshCard,
  restartGame,
} from '../../../src/reducers/CardReducer/actions';

describe('CardReducer actions', () => {
  it('should return payload with type GAME_CARD', () => {
    const doFlipPayload = isCard('123');
    expect(doFlipPayload.type).toEqual(GAME_CARD);
    expect(doFlipPayload.payload).toEqual('123');
  });

  it('should return payload with type REFRESH_CARD', () => {
    const refreshCardPayload = refreshCard();
    expect(refreshCardPayload.type).toEqual(REFRESH_CARD);
  });

  it('should return payload with type RESTART_GAME', () => {
    const restartGamePayload = restartGame();
    expect(restartGamePayload.type).toEqual(RESTART_GAME);
  });
});
