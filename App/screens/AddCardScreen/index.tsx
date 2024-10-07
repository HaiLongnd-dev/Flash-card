import React from 'react';
import AddCardScreenView from './view';
import {TCategory} from '../../types/Category';
const language: TCategory[] = [{title: 'english', icon: 'ENGLISH'}];
const AddCardScreen = () => {
  return <AddCardScreenView data={language} />;
};

export default AddCardScreen;
