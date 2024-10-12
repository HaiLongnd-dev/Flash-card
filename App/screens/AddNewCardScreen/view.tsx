import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {AppText, SubmitButton} from '../../components';
import {colors} from '../../themes/color';
import {TCard} from '../../types/Card';
import {AppContainer} from '../../components/Core/AppContainer';
import SCREEN_NAME from '../../navigation/ScreenName';
import Navigator from '../../navigation/NavigationService';
import ConfirmModal from '../../components/Core/ConfirmModal';
import SvgComponent from '../../assets/svg';
interface AddNewCardViewProps {
  topic;
  cardList: TCard[];
  addCard: (card: TCard) => void;
}

const AddNewCardView = ({topic, cardList, addCard}: AddNewCardViewProps) => {
  const [cardContent, setCardContent] = useState<TCard['content']>('');

  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    Navigator.navigateTo(SCREEN_NAME.ROOT.HOME_SCREEN);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  const BackHome = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <SvgComponent name="CHECK" size={30} color={colors.white} />
      </TouchableOpacity>
    );
  };
  const handleSubmit = () => {
    let card: TCard = {
      idTopic: topic.id,
      id: Math.random() * 10000,
      content: cardContent,
    };
    addCard(card);
  };

  return (
    <AppContainer
      backButton={true}
      haveRightButton={true}
      rightButton={<BackHome />}
      title="ADD FLASHCARD">
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
        <ConfirmModal
          message="Are you want to continue?"
          visible={modalVisible}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </View>
    </AppContainer>
  );
};

export default AddNewCardView;
