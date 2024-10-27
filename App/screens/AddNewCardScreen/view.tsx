import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './style';
import {AppText, SubmitButton} from '../../components';
import {colors} from '../../themes/color';
import {TCard} from '../../types/Card';
import {TTopic} from '../../types/Topic';
import RenderItem from './Components/renderItem';
import Navigator from '../../navigation/NavigationService';
import SvgComponent from '../../assets/svg';
import SCREEN_NAME from '../../navigation/ScreenName';
import {AppContainer} from '../../components/Core/AppContainer';
import ConfirmModal from '../../components/Core/ConfirmModal';
import ColumnHeader from './Components/columnHeader';
import LoadingCircle from '../../components/Core/LoadingAnimation';

interface AddNewCardViewProps {
  topic: TTopic;
  cardList: TCard[];
  addCard: (card: TCard) => void;
  checkWord: (word: string, callback: (data) => void) => void;
  // available: boolean;
}
export interface AddNewCardViewRef {
  setNewDataFromIndex: (data) => void;
  setLoadingStatus: (loadingStatus: boolean) => void;
  setStatusError: (status: boolean) => void;
}
const AddNewCardView = forwardRef<AddNewCardViewRef, AddNewCardViewProps>(
  ({topic, cardList, addCard, checkWord}, ref) => {
    const [cardContent, setCardContent] = useState<string>('');
    const [data, setData] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [available, setAvailable] = useState<boolean>(false);

    const debounce = (fn: Function, ms = 500) => {
      let timeoutId: ReturnType<typeof setTimeout>;
      return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
      };
    };
    useImperativeHandle(ref, () => ({
      setNewDataFromIndex: data => {
        setData(data);
        setAvailable(true);
      },
      setLoadingStatus: (loadingStatus: boolean) => {
        setLoading(loadingStatus);
      },
      setStatusError: (status: boolean) => {
        setIsError(status);
      },
    }));
    const debounceCheckWord = useCallback(
      debounce((text: string) => {
        checkWord(text, setData);
        if (loading === false && isError === false && cardContent.length > 0) {
          setAvailable(true);
        } else {
          setAvailable(false);
        }
      }, 1000),
      [],
    );
    useEffect(() => {
      setAvailable(false);
    }, [cardContent]);
    const handleConfirm = () => {
      Navigator.navigateTo(SCREEN_NAME.ROOT.HOME_SCREEN);
      setModalVisible(false);
    };

    const handleCancel = () => {
      setModalVisible(false);
    };
    const checkLength = (cardContent: string) => {
      if (cardContent.length > 20) return true;
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
    const handleChangeText = (text: string) => {
      setCardContent(text);
      debounceCheckWord(text);
    };

    const handleSubmit = () => {
      let card: TCard = {
        idTopic: topic.id,
        id: Math.random() * 10000,
        content: `${data.word}`,
        phonetic: `${data.phonetic}`,
        meaning: `${data.meaning}`,
      };
      if (cardContent === '' || checkLength(cardContent)) {
        return;
      }
      addCard(card);
      setCardContent('');
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
            {isError && cardContent.length > 0 && (
              <AppText color={colors.red}>This word does not exist!</AppText>
            )}

            <SubmitButton availableSubmit={available} submit={handleSubmit} />
            {cardList ? (
              <View style={styles.listCard}>
                <AppText fontWeight={900} fontSize={20} align="center">
                  Flashcard list
                </AppText>
                <FlatList
                  ListHeaderComponent={<ColumnHeader />}
                  data={cardList}
                  renderItem={({item}) => <RenderItem item={item} />}
                />
              </View>
            ) : null}
          </View>
        </View>
        <ConfirmModal
          message="Are you sure you want to stop?"
          visible={modalVisible}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
        {loading && <LoadingCircle />}
      </AppContainer>
    );
  },
);

export default AddNewCardView;
