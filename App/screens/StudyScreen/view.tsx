import {FlatList, View, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {AppContainer} from '../../components/Core/AppContainer';
import {AppText} from '../../components';
import {TCard} from '../../types/Card';
import RenderItem from './Components/RenderItem';
interface StudyScreenViewProps {
  cardList: TCard[];
}

const {width} = Dimensions.get('window');
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
  page: {
    marginTop: 10,
  },
});
