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
import {colors} from '../../themes/color';
import {TCard} from '../../types/Card';
import SvgComponent from '../../assets/svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import RenderItem from './Components/RenderItem';
interface StudyScreenViewProps {
  cardList: TCard[];
}

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const ITEM_LAYOUT = {
  width: width,
  height: 200,
};
const ITEM_WIDTH = width * 0.8;

const StudyScreenView = ({cardList}: StudyScreenViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCardId, setSelectedCardId] = useState<TCard['id'] | null>(
    null,
  );

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(offsetX / (width - 100));
    setCurrentIndex(newIndex);
  };

  return (
    <AppContainer backButton={true} title="FLASHCARD">
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
    </AppContainer>
  );
};

export default StudyScreenView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10,
    alignItems: 'center',
  },
  cardContent: {
    height: ITEM_LAYOUT.height,
    width: width - width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A0E5C',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  page: {
    marginTop: 10,
  },
  showDesc: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    position: 'absolute',
    bottom: -30,
    shadowColor: '#000',
    elevation: 10,
  },
  hideDesc: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    position: 'absolute',
    top: -30,
    shadowColor: '#000',
    elevation: 10,
  },
});
