import {
  FlatList,
  Text,
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

interface StudyScreenViewProps {
  cardList: TCard[];
}
const {width} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const StudyScreenView = ({cardList}: StudyScreenViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(offsetX / (width - 100));
    setCurrentIndex(newIndex);
  };
  const renderItem = (item: TCard) => {
    return (
      <View style={styles.card}>
        <AppText color={colors.white} fontSize={40}>
          {item.content}
        </AppText>
        <TouchableOpacity style={styles.showDesc}>
          <SvgComponent name="ARROW_DOWN" />
        </TouchableOpacity>
      </View>
    );
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
          renderItem={({item}) => renderItem(item)}
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
  card: {
    width: width - width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A0E5C',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: '50%',
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
});
