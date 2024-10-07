import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {AppText} from '../../components';
import {colors} from '../../themes/color';
import SubmitButton from '../../components/submitButton';
import Navigator from '../../navigation/NavigationService';
import {TTopic} from '../../types/Topic';
import SCREEN_NAME from '../../navigation/ScreenName';

interface AddNewTopicViewProps {
  addTopic: (topic: TTopic) => void;
}

const AddNewTopicView = ({addTopic}: AddNewTopicViewProps) => {
  const [topicName, setTopicName] = useState('');

  const handleSubmit = () => {
    let topic: TTopic = {title: topicName};
    if (topic.title === '') {
      return;
    }
    addTopic(topic);
    setTopicName('');
    setTimeout(() => {
      Navigator.navigateTo(SCREEN_NAME.MANUAL.ADD_NEW_CARD, topic);
    }, 100);
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
              ADD NEW TOPIC
            </AppText>
          </View>
        </View>
      </View>
      <View style={styles.addBox}>
        <View style={styles.addTopic}>
          <AppText fontWeight={900} color={colors.black} fontSize={21}>
            Topic name:
          </AppText>
          <TextInput
            style={styles.inputTopic}
            placeholder="Input topic name"
            onChangeText={setTopicName}
            value={topicName}
          />
          <SubmitButton submit={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default AddNewTopicView;
