import {createSelector} from 'reselect';
import {IGlobalState} from '../reducers';

const getCard = (state: IGlobalState) => state.card;
export const getListCard = createSelector([getCard], state => state.cards);
