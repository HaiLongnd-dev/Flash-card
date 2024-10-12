import React from 'react';
import FlashcardListScreenView from './view';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';
import {NavigationStackParamList} from '../../navigation/Stack';
export type TopicFlashcardRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.FLASHCARD_LIST
>;

type TopicFlashcardViewProps = {
  route: TopicFlashcardRouteProp;
};
const FlashcardListScreen = ({route}: TopicFlashcardViewProps) => {
  const {topic} = route.params;
  return <FlashcardListScreenView topic={topic} />;
};

export default FlashcardListScreen;
