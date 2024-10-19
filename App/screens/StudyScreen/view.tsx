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

interface StudyScreenViewProps {
  cardList: TCard[];
}

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
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

  const toggleCard = (id: TCard['id']) => {
    if (selectedCardId === id) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(id);
    }
  };

  const renderItem = ({item}: {item: TCard}) => {
    const isOpen = selectedCardId === item.id;

    return (
      <View style={styles.cardContainer}>
        <View style={!isOpen ? styles.cardContent : styles.cardContentShown}>
          <AppText color={colors.white} fontSize={40}>
            {item.content}
          </AppText>
          {!isOpen ? (
            <TouchableOpacity
              style={styles.showDesc}
              onPress={() => toggleCard(item.id)}>
              <SvgComponent name="ARROW_DOWN" />
            </TouchableOpacity>
          ) : null}
        </View>
        {isOpen ? (
          <View style={styles.cardDesc}>
            <AppText color={colors.white} fontSize={25}>
              {item.content}
            </AppText>
            <AppText color={colors.white} fontSize={16}>
              {item.desc}
            </AppText>
            <TouchableOpacity
              style={styles.hideDesc}
              onPress={() => toggleCard(item.id)}>
              <SvgComponent name="ARROW_UP" />
            </TouchableOpacity>
          </View>
        ) : null}
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
          renderItem={renderItem}
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
    marginVertical: 25,
  },
  cardContent: {
    height: height - height * 0.7,
    width: width - width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A0E5C',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 200,
  },
  cardContentShown: {
    height: height - height * 0.7,
    width: width - width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A0E5C',
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 50,
  },
  cardDesc: {
    height: height - height * 0.7,
    width: width - width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A0E5C',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 100,
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
