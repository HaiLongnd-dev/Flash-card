import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import topicReducer, {ITopicState} from './topicReducer';
import cardReducer, {ICardState} from './cardReducer';
import studyReducer, {IStudyState} from './studyReducer';
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['topic', 'card', 'study'],
  timeout: 10000,
};
export interface IGlobalState {
  topic: ITopicState;
  card: ICardState;
  study: IStudyState;
}
const combineReducer = combineReducers({
  topic: topicReducer,
  card: cardReducer,
  study: studyReducer,
});
const rootReducer = (state: IGlobalState, action: any) => {
  return combineReducer(state, action);
};
export default persistReducer(rootPersistConfig, rootReducer);
