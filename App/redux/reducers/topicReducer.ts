import {TTopic} from '../../types/Topic';
import * as typeActions from '../actions/types/topicActionType';
import * as appActions from '../actions/types/appActionType';
import * as cardActions from '../actions/types/cardActionType';

export interface ITopicState {
  topics: TTopic[];
}

const initState: ITopicState = {topics: []};
export default function topicReducer(
  state: ITopicState = initState,
  action:
    | typeActions.ITopicAction
    | appActions.IAppAction
    | cardActions.ICardAction,
): ITopicState {
  switch (action.type) {
    case typeActions.TopicActionType.GET_LIST:
      return {
        ...state,
      };
    case typeActions.TopicActionType.ADD:
      return {
        ...state,
        topics: [...state.topics, action.payload.params.topic],
      };
    case typeActions.TopicActionType.EDIT:
      return {
        ...state,
        topics: state.topics.map(topic =>
          topic.id === action.payload.params.id
            ? {...topic, ...action.payload.params.topic}
            : topic,
        ),
      };

    case typeActions.TopicActionType.REMOVE:
      return {
        ...state,
        topics: state.topics.filter(
          topic => topic.id !== action.payload?.params?.id,
        ),
      };
    case cardActions.CardActionType.GET_LIST:
      return {
        ...state,
        topics: state.topics.map(topic =>
          topic.id === action.payload.params.topic.id
            ? {...topic, cards: action.payload.params.topic.cards}
            : topic,
        ),
      };
    case cardActions.CardActionType.ADD:
      return {
        ...state,
        topics: state.topics.map(topic =>
          topic.id === action.payload.params.topicId
            ? {...topic, cards: [...topic.cards, action.payload.params.card]}
            : topic,
        ),
      };
    case appActions.AppActionType.CLEAR_ALL_DATA:
      console.log('clear');
      return initState;
    default:
      return state;
  }
}
