import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {AppText} from '../../components';
import {colors} from '../../themes/color';
import SubmitButton from '../../components/submitButton';
import Navigator from '../../navigation/NavigationService';
import {TTopic} from '../../types/Topic';
import {TCard} from '../../types/Card';
import LanguageCategory from '../../components/languageCategory';
interface AddNewCardViewProps {
  topic;
  cardList: TCard[];
  addCard: (card: TCard) => void;
}

const AddNewCardView = ({topic, cardList, addCard}: AddNewCardViewProps) => {
  const [cardContent, setCardContent] = useState('');
  const handleSubmit = () => {
    let card: TCard = {content: cardContent};
    addCard(card);
    setCardContent('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          <TouchableOpacity style={styles.backBtn} onPress={Navigator.goBack}>
            <AppText fontWeight={900} color={colors.white} fontSize={27}>
              {'<'}
            </AppText>
          </TouchableOpacity>
          <View style={styles.nameScreen}>
            <AppText fontWeight={900} color={colors.white} fontSize={21}>
              ADD NEW CARD
            </AppText>
          </View>
        </View>
      </View>
      <View style={styles.addBox}>
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
              renderItem={({item}) => <LanguageCategory title={item.content} />}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

export default AddNewCardView;
