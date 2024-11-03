import React from 'react';
import HomeScreenView from './view';
import {TTopic} from '../../types/Topic';
import {useDispatch, useSelector} from 'react-redux';
import {getListTopic} from '../../redux/selectors';
import {AppDispatch} from '../../redux/store';
import {clearAllDataAction} from '../../redux/actions/appAction';
import {clearAllRecordAction} from '../../redux/actions/studyAction';

const HomeScreen = () => {
  const listTopic: TTopic[] = useSelector(getListTopic);
  const dispatch = useDispatch<AppDispatch>();
  const clearAllData = () => {
    dispatch(clearAllDataAction());
  };
  const clearAllSession = () => {
    dispatch(clearAllRecordAction());
  };
  return (
    <HomeScreenView
      listTopic={listTopic}
      clearAllData={clearAllData}
      clearAllSession={clearAllSession}
    />
  );
};

export default HomeScreen;
