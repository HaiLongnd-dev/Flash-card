import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText, AppButton} from '../../components';
import {colors} from '../../themes/color';
import Topic from '../../components/Topic';
import {TTopic} from '../../types/Topic';
import {AppContainer} from '../../components/Core/AppContainer';
import SCREEN_NAME from '../../navigation/ScreenName';
import Navigator from '../../navigation/NavigationService';
interface AddCardScreenViewProps {
  data: TTopic[];
}
const AddCardScreenView = ({data}: AddCardScreenViewProps) => {
  const handleButton = () => {
    Navigator.navigateTo(SCREEN_NAME.MANUAL.ADD_NEW_TOPIC);
  };
  return (
    <AppContainer title="ADD FLASHCARD" backButton={true}>
      <View style={styles.container}>
        <View style={styles.button}>
          <AppButton handleButton={handleButton} nameButton={'ADD NEW TOPIC'} />
          <AppText fontSize={21} color={colors.black} align="center">
            ------- or -------
          </AppText>
        </View>
        <View style={styles.addTopic}>
          <AppText fontSize={21} color={colors.black} align="center">
            Choose a topic card
          </AppText>
        </View>
        <FlatList
          data={[...data].reverse()}
          renderItem={({item}) => <Topic topic={item} />}
        />
      </View>
    </AppContainer>
  );
};

export default AddCardScreenView;
