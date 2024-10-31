import React from 'react';
import StudyScreenView from './view';
import SCREEN_NAME from '../../navigation/ScreenName';
import { RouteProp } from '@react-navigation/native';
import { NavigationStackParamList } from '../../navigation/Stack';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { stopStudyAction } from '../../redux/actions/studyAction';

export type StudyScreenRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.STUDY_SCREEN
>;
export type StudyScreenProps = {
  route: StudyScreenRouteProp;
};
const StudyScreen = ({ route }: StudyScreenProps) => {
  const { recordId, cardList } = route.params;

  const dispatch = useDispatch<AppDispatch>();
  const stopStudy = () => {
    dispatch(stopStudyAction(recordId));
  };
  return <StudyScreenView cardList={cardList} stopStudy={stopStudy} />;
};

export default StudyScreen;
