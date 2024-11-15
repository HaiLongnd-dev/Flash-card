import {createSelector} from 'reselect';
import {IGlobalState} from '../reducers';
import {TTopic} from '../../types/Topic';

const getCardState = (state: IGlobalState) => state.card;

export const getListCard = createSelector([getCardState], state => state.cards);
