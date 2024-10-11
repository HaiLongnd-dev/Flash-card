import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {AppText, SubmitButton} from '../../components';
import {colors} from '../../themes/color';
import Navigator from '../../navigation/NavigationService';
import {TCard} from '../../types/Card';
import Topic from '../../components/Topic';
import {AppContainer} from '../../components/Core/AppContainer';
interface AddNewCardViewProps {
  topic;
  cardList: TCard[];
  addCard: (card: TCard) => void;
}

const AddNewCardView = ({topic, cardList, addCard}: AddNewCardViewProps) => {
  const [cardContent, setCardContent] = useState<TCard['content']>('');
  const handleSubmit = () => {
    let card: TCard = {
      id: Math.random(),
      content: cardContent,
    };
    addCard(card);
    setCardContent('');
  };
  return (
    <AppContainer backButton={true} backHome={true} title="ADD FLASHCARD">
      <View>
        <View style={styles.addTopic}>
          <AppText fontWeight={900} color={colors.black} fontSize={27}>
            Topic: {topic.title}
          </AppText>
          <AppText fontWeight={900} color={colors.black} fontSize={21}>
            Card content:
          </AppText>
          <TextInput
            style={styles.inputTopic}
            placeholder="Input card content"
            onChangeText={setCardContent}
            value={cardContent}
          />
          <SubmitButton submit={handleSubmit} />
          {cardList ? (
            <FlatList
              data={cardList}
              renderItem={({item}) => (
                <View style={styles.listCard}>
                  <AppText fontWeight={900} fontSize={20} align="center">
                    Flashcard list
                  </AppText>
                  <AppText style={styles.card} fontSize={18}>
                    {item.content}
                  </AppText>
                </View>
              )}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
    </AppContainer>
  );
};

export default AddNewCardView;
