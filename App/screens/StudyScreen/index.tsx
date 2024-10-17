import React from 'react';
import StudyScreenView from './view';
import SCREEN_NAME from '../../navigation/ScreenName';
import {RouteProp} from '@react-navigation/native';
import {NavigationStackParamList} from '../../navigation/Stack';

export type StudyScreenRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.STUDY_SCREEN
>;
export type StudyScreenProps = {
  route: StudyScreenRouteProp;
};
const StudyScreen = ({route}: StudyScreenProps) => {
  const {props} = route.params;
  return <StudyScreenView cardList={props} />;
};

export default StudyScreen;
