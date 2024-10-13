import React, {useState} from 'react';
import {AppContainer} from '../../components/Core/AppContainer';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TCard} from '../../types/Card';
import {RenderItem} from './Components/RenderItem';
import {RenderHiddenItem} from './Components/RenderHidenItem';
import styles from './style';
import {TouchableOpacity, View} from 'react-native';
import SvgComponent from '../../assets/svg';
import {colors} from '../../themes/color';
import {AppText} from '../../components';

import ConfirmModal from '../../components/Core/ConfirmModal';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';
import {TTopic} from '../../types/Topic';

interface FlashcardListScreenViewProps {
  topic;
  cardList: TCard[];
  handleDelete: (id: TCard['id']) => void;
  handleEdit: (id: TCard['id']) => void;
}
const FlashcardListScreenView = ({
  topic,
  cardList,
  handleDelete,
  handleEdit,
}: FlashcardListScreenViewProps) => {
  const addFlashcard = (topic: TTopic) => {
    Navigator.navigateTo(SCREEN_NAME.MANUAL.ADD_NEW_CARD, {topic});
  };
  const RightButton = () => {
    return (
      <TouchableOpacity onPress={() => addFlashcard(topic)}>
        <SvgComponent name="ADD" color={colors.white} size={30} />
      </TouchableOpacity>
    );
  };
  return (
    <AppContainer
      haveRightButton={true}
      rightButton={<RightButton />}
      backButton={true}
      title="FLASHCARD LIST">
      {cardList.length === 0 ? (
        <AppText fontSize={20} align="center">
          Have no card!
        </AppText>
      ) : (
        <SwipeListView
          data={cardList}
          renderItem={RenderItem}
          renderHiddenItem={(data, rowMap) => (
            <RenderHiddenItem
              item={data.item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
          rightOpenValue={-150}
          style={styles.list}
        />
      )}
    </AppContainer>
  );
};

export default FlashcardListScreenView;