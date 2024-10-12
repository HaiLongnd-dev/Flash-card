import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {AppText, SubmitButton} from '../../components';
import {colors} from '../../themes/color';
import {TCard} from '../../types/Card';
import {AppContainer} from '../../components/Core/AppContainer';
import {TTopic} from '../../types/Topic';
interface AddNewCardViewProps {
  topic;
  cardList: TCard[];
  addCard: (card: TCard) => void;
}

const AddNewCardView = ({topic, cardList, addCard}: AddNewCardViewProps) => {
  const [cardContent, setCardContent] = useState<TCard['content']>('');
  const handleSubmit = () => {
    let card: TCard = {
      idTopic: topic.id,
      id: Math.random() * 10000,
      content: cardContent,
    };
    addCard(card);
  };

  return (
    <AppContainer backButton={true} backHome={true} title="ADD FLASHCARD">
      <View style={styles.container}>
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
            <View style={styles.listCard}>
              <AppText fontWeight={900} fontSize={20} align="center">
                Flashcard list
              </AppText>
              <FlatList
                data={cardList}
                renderItem={({item}) => (
                  <AppText style={styles.card} fontSize={18}>
                    {item.content}
                  </AppText>
                )}
              />
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    </AppContainer>
  );
};

export default AddNewCardView;
