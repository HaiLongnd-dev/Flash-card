import {createSelector} from 'reselect';
import {IGlobalState} from '../reducers';

const getTopic = (state: IGlobalState) => state.topic;
export const getListTopic = createSelector([getTopic], state => state.topics);
