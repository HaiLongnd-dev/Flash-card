import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
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
  available: boolean;

  editCard: (id: TCard['id'], card: Partial<TCard>) => void;
  checkWord: (word: string, callback: (data) => void) => void;
}
const EditCardScreenView = ({
  card,
  available,
  editCard,
  checkWord,
}: EditCardScreenViewProps) => {
  const [cardContent, setCardContent] = useState(card.content);
  const [data, setData] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const debounce = (fn: Function, ms = 500) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };
  const debounceCheckWord = useCallback(
    debounce((text: string) => {
      checkWord(text, setData);
    }, 1000),
    [],
  );
  const handleChangeText = (text: string) => {
    setCardContent(text);
    debounceCheckWord(text);
  };

  const handleConfirm = () => {
    let editedCard: Partial<TCard> = {
      content: `${data.word}`,
      phonetic: `${data.phonetic}`,
      meaning: `${data.meaning}`,
    };
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
        disabled={!available}
        onPress={() => {
          setModalVisible(true);
        }}>
        <SvgComponent name="CHECK" size={30} color={colors.white} />
      </TouchableOpacity>
    );
  };

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
