import { isCard, restartGame, refreshCard } from '../../reducers/CardReducer/actions';
import { getCards, getGameRecords } from '../../reducers/CardReducer/selectors';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import CardGame from './CardGame';

export default connect(
  (state: RootState) => ({
    cards: getCards(state),
    records: getGameRecords(state),
  }),
  {
    isCard,
    refreshCard,
    restartGame,
  }
)(CardGame);
