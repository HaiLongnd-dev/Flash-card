import React from 'react';
import HomeScreenView from './view';
import {TTopic} from '../../types/Topic';
import {useSelector} from 'react-redux';
import {getListTopic} from '../../redux/selectors';

const HomeScreen = () => {
  const listTopic: TTopic[] = useSelector(getListTopic);

  return <HomeScreenView listTopic={listTopic} />;
};

export default HomeScreen;
