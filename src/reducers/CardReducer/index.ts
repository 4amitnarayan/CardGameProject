import { StateOfCard } from '../../types/Card';
import { CardAction, GAME_CARD, REFRESH_CARD, RESTART_GAME } from './actions';
import { getInitialState, getRefreshState, getFlipState } from '../../utils';

export const initialState: StateOfCard = getInitialState();

const CRDReducer = (state: StateOfCard = initialState, action: CardAction): StateOfCard => {
  switch (action.type) {
    case GAME_CARD:
      return getFlipState(state, action.payload);

    case REFRESH_CARD:
      return getRefreshState(state);

    case RESTART_GAME:
      return getInitialState();

    default:
      return state;
  }
};

export default CRDReducer;
export type { CardAction };
