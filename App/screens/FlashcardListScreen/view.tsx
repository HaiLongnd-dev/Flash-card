import React, {useState} from 'react';
import {AppContainer} from '../../components/Core/AppContainer';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TCard} from '../../types/Card';
import {RenderItem} from './Components/RenderItem';
import {
  HIDDEN_ITEM_LAYOUT,
  RenderHiddenItem,
} from './Components/RenderHidenItem';
import styles from './style';
import {TouchableOpacity, View} from 'react-native';
import SvgComponent from '../../assets/svg';
import {colors} from '../../themes/color';
import {AppText, NavigationScreenButton} from '../../components';
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
        <>
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
            rightOpenValue={-(HIDDEN_ITEM_LAYOUT.width * 2)}
            style={styles.list}
          />
          <View style={styles.button}>
            <NavigationScreenButton
              nameButton="LET'S STUDY! "
              nameScreen="STUDY_SCREEN"
              props={cardList}
            />
          </View>
        </>
      )}
    </AppContainer>
  );
};

export default FlashcardListScreenView;
