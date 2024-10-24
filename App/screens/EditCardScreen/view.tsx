import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {AppText} from '../../components';
import {colors} from '../../themes/color';
import {TCard} from '../../types/Card';
import {AppContainer} from '../../components/Core/AppContainer';
import SCREEN_NAME from '../../navigation/ScreenName';
import Navigator from '../../navigation/NavigationService';
import ConfirmModal from '../../components/Core/ConfirmModal';
import SvgComponent from '../../assets/svg';
import {TTopic} from '../../types/Topic';
interface EditCardScreenViewProps {
  card: TCard;
  editCard: (id: TCard['id'], card: Partial<TCard>) => void;
}
const EditCardScreenView = ({card, editCard}: EditCardScreenViewProps) => {
  const [cardContent, setCardContent] = useState(card.content);
  // const [cardDescription, setCardDescription] = useState(card.desc);

  const [modalVisible, setModalVisible] = useState(false);

  let editedCard: Partial<TCard> = {
    content: cardContent,
    // desc: cardDescription,
  };
  const handleConfirm = () => {
    editCard(card.id, editedCard);
    setModalVisible(false);
    Navigator.goBack();
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  const checkLength = (cardContent: string) => {
    if (cardContent.length > 20) return true;
  };
  const HandleButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <SvgComponent name="CHECK" size={30} color={colors.white} />
      </TouchableOpacity>
    );
  };
  const handleSubmit = () => {};

  return (
    <AppContainer
      backButton={true}
      haveRightButton={true}
      rightButton={<HandleButton />}
      title="ADD FLASHCARD">
      <View style={styles.container}>
        <View style={styles.addTopic}>
          <AppText fontWeight={900} color={colors.black} fontSize={21}>
            Card content:
          </AppText>
          <TextInput
            style={styles.inputTopic}
            placeholder="Input card content"
            onChangeText={setCardContent}
            value={cardContent}
          />
          {checkLength(cardContent) ? (
            <AppText color={colors.red}>
              Exceeds the specified number of characters!
            </AppText>
          ) : (
            <></>
          )}
          <AppText fontWeight={900} color={colors.black} fontSize={21}>
            Card description:
          </AppText>
          {/* <TextInput
            style={styles.inputTopic}
            placeholder="Input card description"
            onChangeText={setCardDescription}
            value={cardDescription}
          />
          {checkLength(cardContent) ? (
            <AppText color={colors.red}>
              Exceeds the specified number of characters!
            </AppText>
          ) : (
            <></>
          )} */}
        </View>
        <ConfirmModal
          message="Are you sure you want to stop?"
          visible={modalVisible}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </View>
    </AppContainer>
  );
};
export default EditCardScreenView;
