import {FlatList, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {AppButton} from '../../components';
import Topic from '../../components/Topic';
import {TTopic} from '../../types/Topic';
import {AppContainer} from '../../components/Core/AppContainer';
import SvgComponent from '../../assets/svg';
import {colors} from '../../themes/color';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';

interface TopicLisScreenViewProps {
  data: TTopic[];
}

const TopicLisScreenView = ({data}: TopicLisScreenViewProps) => {
  const [editTopicOpt, setEditTopic] = useState<boolean>(false);
  const RightButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setEditTopic(!editTopicOpt);
        }}>
        <SvgComponent name="SETTING" color={colors.white} size={30} />
      </TouchableOpacity>
    );
  };
  const handleButton = () => {
    Navigator.navigateTo(SCREEN_NAME.MANUAL.ADD_NEW_TOPIC);
  };
  return (
    <AppContainer
      haveRightButton={true}
      rightButton={<RightButton />}
      title="TOPIC LIST"
      backButton={true}>
      <View style={styles.container}>
        <FlatList
          data={[...data].reverse()}
          renderItem={({item}) => (
            <Topic editTopicOpt={editTopicOpt} topic={item} />
          )}
        />
      </View>
      <View style={styles.button}>
        <AppButton nameButton={'ADD NEW TOPIC'} handleButton={handleButton} />
      </View>
    </AppContainer>
  );
};

export default TopicLisScreenView;
