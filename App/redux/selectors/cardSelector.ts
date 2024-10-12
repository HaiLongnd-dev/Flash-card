import {createSelector} from 'reselect';
import {IGlobalState} from '../reducers';
import {TTopic} from '../../types/Topic';

const getCardState = (state: IGlobalState) => state.card;

export const getListCardByIdTopic = (idTopic: TTopic['id']) =>
  createSelector([getCardState], cardState =>
    cardState.cards.filter(card => card.idTopic === idTopic),
  );
