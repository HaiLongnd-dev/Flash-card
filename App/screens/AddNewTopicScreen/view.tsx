import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {AppText, SubmitButton} from '../../components';
import {colors} from '../../themes/color';
import Navigator from '../../navigation/NavigationService';
import {TTopic} from '../../types/Topic';
import SCREEN_NAME from '../../navigation/ScreenName';
import SvgComponent, {SvgName} from '../../assets/svg';
import {AppContainer} from '../../components/Core/AppContainer';
import {iconCategories} from '../ChooseIconScreen/Constant/listIcon';
import {iconColors} from '../ChooseIconScreen/Constant/listColor';

interface AddNewTopicViewProps {
  addTopic: (topic: TTopic) => void;
}

const AddNewTopicView = ({addTopic}: AddNewTopicViewProps) => {
  const initIcon = iconCategories[0].data[0];
  const initColor = iconColors[0];

  const [iconName, setIconName] = useState<SvgName>(initIcon);
  const [iconColor, setIconColor] = useState<string>(initColor);

  const [topicName, setTopicName] = useState<string>('');
  const checkLength = (topicName: string) => {
    if (topicName.length > 20) return true;
  };
  const handleSubmit = () => {
    let topic: TTopic = {
      id: Math.random(),
      title: topicName,
      icon: iconName,
      iconColor: iconColor,
    };
    if (topic.title === '' || checkLength(topicName)) {
      return;
    }
    addTopic(topic);
    setTopicName('');
    setTimeout(() => {
      Navigator.navigateTo(SCREEN_NAME.MANUAL.ADD_NEW_CARD, {topic});
    }, 100);
  };

  return (
    <AppContainer backButton={true} title="ADD NEW TOPIC">
      <View style={styles.containerContent}>
        <View style={styles.addBox}>
          <View style={styles.addIconBox}>
            <AppText>Icon:</AppText>
            <TouchableOpacity
              style={[styles.icon, {backgroundColor: iconColor}]}
              onPress={() =>
                Navigator.navigateTo(SCREEN_NAME.MANUAL.CHOOSE_ICON, {
                  callback: (iconName: SvgName, iconColor: string) => {
                    setIconName(iconName);
                    setIconColor(iconColor);
                  },
                })
              }>
              <SvgComponent name={iconName} />
            </TouchableOpacity>
          </View>
          <View style={styles.addTopic}>
            <AppText>Topic:</AppText>
            <TextInput
              style={styles.inputTopic}
              placeholder="Input topic name"
              onChangeText={setTopicName}
              value={topicName}
            />
            {checkLength(topicName) ? (
              <AppText color={colors.red}>
                Exceeds the specified number of characters!
              </AppText>
            ) : (
              <></>
            )}
          </View>
        </View>
        <SubmitButton availableSubmit={true} submit={handleSubmit} />
      </View>
    </AppContainer>
  );
};

export default AddNewTopicView;
