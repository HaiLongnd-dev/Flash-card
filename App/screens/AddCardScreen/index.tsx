import React from 'react';
import AddCardScreenView from './view';
import {TTopic} from '../../types/Topic';
import {useSelector} from 'react-redux';
import {getListTopic} from '../../redux/selectors';
const AddCardScreen = () => {
  const listTopic: TTopic[] = useSelector(getListTopic);
  return <AddCardScreenView data={listTopic} />;
};

export default AddCardScreen;
