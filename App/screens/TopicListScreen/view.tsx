import {FlatList, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {NavigationScreenButton} from '../../components';
import Topic from '../../components/Topic';
import {TTopic} from '../../types/Topic';
import {AppContainer} from '../../components/Core/AppContainer';
import SvgComponent from '../../assets/svg';
import {colors} from '../../themes/color';

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
        <NavigationScreenButton
          nameButton={'ADD NEW TOPIC'}
          nameScreen={'ADD_NEW_TOPIC'}
        />
      </View>
    </AppContainer>
  );
};

export default TopicLisScreenView;
