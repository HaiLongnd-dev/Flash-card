import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppContainer} from '../../components/Core/AppContainer';
import {AppText} from '../../components';
import styles from './style';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';
import SvgComponent, {SvgName} from '../../assets/svg';
import {TTopic} from '../../types/Topic';
import {colors} from '../../themes/color';
import ConfirmModal from '../../components/Core/ConfirmModal';

interface EditTopicScreenViewProps {
  topic: TTopic;
  editTopic: (id: TTopic['id'], topic: Partial<TTopic>) => void;
}

const EditTopicScreenView = ({topic, editTopic}: EditTopicScreenViewProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [iconName, setIconName] = useState(topic.icon);
  const [iconColor, setIconColor] = useState(topic.iconColor);

  const [topicName, setTopicName] = useState<string>(topic.title);
  const checkLength = (topicName: string) => {
    if (topicName.length > 20) return true;
  };
  const CompleteEdit = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <SvgComponent name="CHECK" size={30} color={colors.white} />
      </TouchableOpacity>
    );
  };

  let topicEdited: Partial<TTopic> = {
    title: topicName,
    iconColor: iconColor,
    icon: iconName,
  };
  const handleConfirm = () => {
    editTopic(topic.id, topicEdited);
    setModalVisible(false);
    Navigator.goBack();
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <AppContainer
      haveRightButton={true}
      rightButton={<CompleteEdit />}
      backButton={true}
      title="EDIT TOPIC ">
      <View style={styles.containerContent}>
        <View style={styles.editBox}>
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
      </View>
      <ConfirmModal
        message="Are you sure you want to continue?"
        visible={modalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </AppContainer>
  );
};

export default EditTopicScreenView;
