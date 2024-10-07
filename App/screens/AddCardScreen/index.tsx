import React from 'react';
import AddCardScreenView from './view';
import {TCategory} from '../../types/Category';
const language: TCategory[] = [{title: 'English', icon: 'ENGLISH'}];
const AddCardScreen = () => {
  return <AddCardScreenView data={language} />;
};

export default AddCardScreen;
