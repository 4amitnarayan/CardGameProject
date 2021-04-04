import { createStore, combineReducers } from 'redux';
import CardReducer from './reducers/CardReducer';

const reducers = {
  Card: CardReducer,
};

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
