import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText} from '../../components';
import {colors} from '../../themes/color';
import SubmitButton from '../../components/submitButton';
import Navigator from '../../navigation/NavigationService';
const AddNewTopicView = () => {
  const handleSubmit = () => {};
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
          <TextInput style={styles.inputTopic} placeholder="Input topic name" />
          <SubmitButton submit={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default AddNewTopicView;
