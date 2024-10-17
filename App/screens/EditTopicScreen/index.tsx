import React from 'react';
import EditTopicScreenView from './view';
import SCREEN_NAME from '../../navigation/ScreenName';
import {RouteProp} from '@react-navigation/native';
import {NavigationStackParamList} from '../../navigation/Stack';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {TTopic} from '../../types/Topic';
import {editTopicAction} from '../../redux/actions/topicAction';

export type EditTopicRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.EDIT_TOPIC
>;
type EditTopicScreenProps = {
  route: EditTopicRouteProp;
};

const EditTopicScreen = ({route}: EditTopicScreenProps) => {
  const topic = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const editTopic = (id: TTopic['id'], topic: Partial<TTopic>) => {
    dispatch(editTopicAction(id, topic));
  };
  return <EditTopicScreenView topic={topic} editTopic={editTopic} />;
};

export default EditTopicScreen;
