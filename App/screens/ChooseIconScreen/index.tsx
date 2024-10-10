import React from 'react';
import ChooseIconScreenView from './view';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';
import {NavigationStackParamList} from '../../navigation/Stack';

export type AddTopicRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.CHOOSE_ICON
>;

type ChooseIconScreenProps = {
  route: AddTopicRouteProp;
};
const ChooseIconScreen = ({route}: ChooseIconScreenProps) => {
  return <ChooseIconScreenView route={route} />;
};

export default ChooseIconScreen;
