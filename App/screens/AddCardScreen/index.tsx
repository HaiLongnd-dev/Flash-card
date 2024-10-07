import React from 'react';
import AddCardScreenView from './view';
import {TTopic} from '../../types/Topic';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { addTopicAction } from '../../redux/actions/topicAction';
import { getListTopic } from '../../redux/selectors';
const AddCardScreen = () => {
  const listTopic: TTopic[] = useSelector(getListTopic);

  

  return <AddCardScreenView data={listTopic} />;
};

export default AddCardScreen;
