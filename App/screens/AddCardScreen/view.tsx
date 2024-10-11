import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText, NavigationScreenButton} from '../../components';
import {colors} from '../../themes/color';
import Topic from '../../components/Topic';
import {TTopic} from '../../types/Topic';
import Navigator from '../../navigation/NavigationService';
import {AppContainer} from '../../components/Core/AppContainer';

interface AddCardScreenViewProps {
  data: TTopic[];
}
const AddCardScreenView = ({data}: AddCardScreenViewProps) => {
  console.log('=========data==========', data);

  return (
    <AppContainer title="ADD FLASHCARD" backButton={true}>
      <View style={styles.addTopic}>
        <AppText fontSize={21} color={colors.black} align="center">
          Choose a topic card
        </AppText>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Topic color={item.iconColor} icon={item.icon} title={item.title} />
        )}
      />
      <AppText fontSize={21} color={colors.black} align="center">
        ------- or -------
      </AppText>
      <View style={styles.button}>
        <NavigationScreenButton
          nameButton={'ADD NEW TOPIC'}
          nameScreen={'ADD_NEW_TOPIC'}
        />
      </View>
    </AppContainer>
  );
};

export default AddCardScreenView;
