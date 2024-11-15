import {createSelector} from 'reselect';
import {IGlobalState} from '../reducers';
import {TTopic} from '../../types/Topic';

const getTopic = (state: IGlobalState) => state.topic;
export const getListTopic = createSelector([getTopic], state => state.topics);
export function getListCardByIdTopic(topicId: TTopic['id']) {
  return createSelector([getTopic], state => {
    const topic = state.topics.find(topic => topic.id === topicId);
    return topic ? topic.cards : [];
  });
}
