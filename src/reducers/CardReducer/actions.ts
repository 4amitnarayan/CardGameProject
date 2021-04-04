import { Action } from 'redux';

export const GAME_CARD = 'FLIP/GAME_CARD';
export const REFRESH_CARD = 'FLIP/REFRESH_CARD';
export const RESTART_GAME = 'FLIP/RESTART_GAME';
export const NO_ACTION = 'FLIP/NO_ACTION';

interface isCard extends Action {
  type: typeof GAME_CARD;
  payload: string;
}

interface refreshCard extends Action {
  type: typeof REFRESH_CARD;
}

interface RestartGame extends Action {
  type: typeof RESTART_GAME;
}
interface NoAction extends Action {
  type: typeof NO_ACTION;
}

export type CardAction = isCard | refreshCard | RestartGame | NoAction;

export const restartGame = (): RestartGame => ({
  type: RESTART_GAME,
});

export const isCard = (payload: string): isCard => ({
  type: GAME_CARD,
  payload,
});

export const refreshCard = (): refreshCard => ({
  type: REFRESH_CARD,
});
