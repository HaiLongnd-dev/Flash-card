import React, {useState} from 'react';
import TopicListScreenView from './view';
import {TTopic} from '../../types/Topic';
import {useSelector} from 'react-redux';
import {getListTopic} from '../../redux/selectors';
const TopicListScreen = () => {
  const listTopic: TTopic[] = useSelector(getListTopic);

  return <TopicListScreenView data={listTopic} />;
};

export default TopicListScreen;
