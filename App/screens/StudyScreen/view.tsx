import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {AppContainer} from '../../components/Core/AppContainer';
import {AppText} from '../../components';
import {TCard} from '../../types/Card';
import RenderItem from './Components/RenderItem';
import SvgComponent from '../../assets/svg';
import {colors} from '../../themes/color';
import styles from './style';
import ConfirmModal from '../../components/Core/ConfirmModal';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';

interface StudyScreenViewProps {
  cardList: TCard[];
  stopStudy: () => void;
}

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;

const StudyScreenView = ({cardList, stopStudy}: StudyScreenViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCardId, setSelectedCardId] = useState<TCard['id'] | null>(
    null,
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(offsetX / (width - 100));
    setCurrentIndex(newIndex);
  };

  const handleConfirm = () => {
    stopStudy();
    Navigator.navigateTo(SCREEN_NAME.ROOT.HOME_SCREEN);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  const rightButtonEvent = () => {
    setModalVisible(true);
  };
  const RightButton = () => {
    return (
      <TouchableOpacity onPress={rightButtonEvent}>
        <SvgComponent name="CHECK" color={colors.white} size={30} />
      </TouchableOpacity>
    );
  };
  return (
    <AppContainer
      backButton={false}
      haveRightButton={true}
      rightButton={<RightButton />}
      title="FLASHCARD">
      <View style={styles.container}>
        <FlatList
          data={cardList}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={event => handleScroll(event)}
          renderItem={({item}) => (
            <RenderItem
              item={item}
              isOpen={selectedCardId === item.id}
              setSelectedCardId={setSelectedCardId}
            />
          )}
          keyExtractor={item => item.id.toString()}
          snapToInterval={ITEM_WIDTH}
          contentContainerStyle={{
            paddingHorizontal: (width - ITEM_WIDTH) / 14,
          }}
          style={{paddingVertical: 20}}
        />
        <AppText style={styles.page} fontSize={16}>
          {currentIndex + 1} / {cardList.length}
        </AppText>
      </View>
      <ConfirmModal
        message="Are you sure you want to stop?"
        visible={modalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </AppContainer>
  );
};

export default StudyScreenView;
