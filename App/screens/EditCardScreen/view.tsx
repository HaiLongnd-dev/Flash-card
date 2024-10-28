import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './style';
import {AppText} from '../../components';
import {colors} from '../../themes/color';
import {TCard} from '../../types/Card';
import {AppContainer} from '../../components/Core/AppContainer';
import Navigator from '../../navigation/NavigationService';
import ConfirmModal from '../../components/Core/ConfirmModal';
import SvgComponent from '../../assets/svg';
import LoadingCircle from '../../components/Core/LoadingAnimation';
import WordListCalled, {
  wordListRef,
} from '../AddNewCardScreen/Components/wordListCalled';

interface EditCardScreenViewProps {
  card: TCard;
  available: boolean;

  editCard: (id: TCard['id'], card: Partial<TCard>) => void;
  checkWord: (word: string, callback: (data) => void) => void;
}
export interface EditCardViewRef {
  setNewDataFromIndex: (data) => void;
  setLoadingStatus: (loadingStatus: boolean) => void;
  setStatusError: (status: boolean) => void;
}
const EditCardScreenView = forwardRef<EditCardViewRef, EditCardScreenViewProps>(
  ({card, editCard, checkWord}, ref) => {
    const [cardContent, setCardContent] = useState(card.content);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [available, setAvailable] = useState<boolean>(false);
    const [showListCalled, setShowListCalled] = useState<boolean>(true);
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
        setShowListCalled(false);
      }, 1000),
      [],
    );
    const WordListCalledRef = useRef<wordListRef | null>(null);

    useImperativeHandle(ref, () => ({
      setNewDataFromIndex: data => {
        setData(data);
        setShowListCalled(true);
        WordListCalledRef.current.setNewDataForList(data);
        setAvailable(true);
      },
      setLoadingStatus: (loadingStatus: boolean) => {
        setLoading(loadingStatus);
      },
      setStatusError: (status: boolean) => {
        setIsError(status);
        setShowListCalled(false);
      },
    }));
    const handleChangeText = (text: string) => {
      setCardContent(text);
      debounceCheckWord(text);
    };

    const handleConfirm = () => {
      let editedCard: Partial<TCard> = {
        content: `${data.word}`,
        phonetic: `${data.phonetic}`,
        meaning: `${data.meaning}`,
        audio: `${data.audio}`,
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
        title="EDIT FLASHCARD">
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
            {isError && cardContent.length > 0 && (
              <AppText color={colors.red}>This word does not exist!</AppText>
            )}
          </View>
          {showListCalled && (
            <WordListCalled card={card} ref={WordListCalledRef} />
          )}

          <ConfirmModal
            message="Are you sure you want to stop?"
            visible={modalVisible}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        </View>
        {loading && <LoadingCircle />}
      </AppContainer>
    );
  },
);
export default EditCardScreenView;
