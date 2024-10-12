import {Text, View} from 'react-native';
import React from 'react';
import {AppContainer} from '../../components/Core/AppContainer';
import {AppText} from '../../components';
interface FlashcardListScreenViewProps {
  topic;
}
const FlashcardListScreenView = ({topic}: FlashcardListScreenViewProps) => {
  console.log('topic======', topic);

  return (
    <AppContainer backButton={true} title="FLASHCARD LIST">
      <AppText>alo</AppText>
    </AppContainer>
  );
};

export default FlashcardListScreenView;
