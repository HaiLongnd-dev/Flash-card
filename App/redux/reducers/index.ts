import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import  topicReducer, { ITopicState } from './topicReducer';
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['topics'],
  timeout: 10000,
};
export interface IGlobalState {
  topic: ITopicState
}
const combineReducer = combineReducers({
  topic:topicReducer
});
const rootReducer = (state: IGlobalState, action: any) => {
  return combineReducer(state, action);
};
export default persistReducer(rootPersistConfig, rootReducer);
