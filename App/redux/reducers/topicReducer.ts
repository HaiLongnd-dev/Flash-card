import {TTopic} from '../../types/Topic';
import * as actions from '../actions/types/topicActionType';
export interface ITopicState {
  topics: TTopic[];
}

const initState: ITopicState = {topics: []};
export default function topicReducer(
  state: ITopicState = initState,
  action: actions.ITopicAction,
): ITopicState {
  switch (action.type) {
    case actions.TopicActionType.GET_LIST:
      return {
        ...state,
      };
    case actions.TopicActionType.ADD:
      return {
        ...state,
        topics: [...state.topics, action.payload.params.topic],
      };
    case actions.TopicActionType.EDIT:
      return {
        ...state,
        topics: state.topics.map(topic =>
          topic.id === action.payload.params.id
            ? {...topic, ...action.payload.params.topic}
            : topic,
        ),
      };

    case actions.TopicActionType.REMOVE:
      return {
        ...state,
        topics: state.topics.filter(
          topic => topic.id !== action.payload?.params?.id,
        ),
      };

    default:
      return state;
  }
}
