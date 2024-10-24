import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './style';
import {AppText, SubmitButton} from '../../components';
import {colors} from '../../themes/color';
import {TCard} from '../../types/Card';
import {TTopic} from '../../types/Topic';
import RenderItem from './Components/renderItem';
interface AddNewCardViewProps {
  topic: TTopic;
  cardList: TCard[];
  addCard: (card: TCard) => void;
  checkWord: (word: string, callback: (data) => void) => void;
  checkLength: (content: string) => boolean;
  available: boolean;
}

const AddNewCardView = ({
  topic,
  cardList,
  addCard,
  checkWord,
  checkLength,
  available,
}: AddNewCardViewProps) => {
  const [cardContent, setCardContent] = useState<string>('');
  const [cardPhonetic, setCardPhonetic] = useState<TCard['phonetic']>('');
  const [submitAvailable, setSubmitAvailable] = useState<boolean>(false);
  const debounce = (fn: Function, ms = 500) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };
  const debounceCheckWord = useCallback(
    debounce((text: string) => {
      checkWord(text, setCardPhonetic);
      setSubmitAvailable(available);
    }, 1000),
    [],
  );

  const handleChangeText = (text: string) => {
    setCardContent(text);
    debounceCheckWord(text);
  };

  const handleSubmit = () => {
    let card: TCard = {
      idTopic: topic.id,
      id: Math.random() * 10000,
      content: cardContent,
      phonetic: cardPhonetic,
    };
    if (cardContent === '' || checkLength(cardContent)) {
      return;
    }
    addCard(card);
    setCardContent('');
  };

  return (
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
          onChangeText={handleChangeText}
          value={cardContent}
        />
        {checkLength(cardContent) ? (
          <AppText color={colors.red}>
            Exceeds the specified number of characters!
          </AppText>
        ) : (
          <></>
        )}

        <SubmitButton availableSubmit={submitAvailable} submit={handleSubmit} />
        {cardList ? (
          <View style={styles.listCard}>
            <AppText fontWeight={900} fontSize={20} align="center">
              Flashcard list
            </AppText>
            <FlatList
              data={cardList}
              renderItem={({item}) => <RenderItem item={item} />}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default AddNewCardView;
