import React from 'react';
import AddNewTopicView from './view';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {TTopic} from '../../types/Topic';
import {addTopicAction} from '../../redux/actions/topicAction';

const AddNewTopicScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const addTopic = (topic: TTopic) => {
    dispatch(addTopicAction(topic));
  };
  return <AddNewTopicView addTopic={addTopic}/>;
};

export default AddNewTopicScreen;
