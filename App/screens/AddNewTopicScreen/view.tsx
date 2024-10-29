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
import {useFormik} from 'formik';
import {ADD_TOPIC_FORM_SCHEME} from './Validate/validateForm';

interface AddNewTopicViewProps {
  addTopic: (topic: TTopic) => void;
}

interface FormikProps {
  icon: SvgName;
  iconColor: string;
  title: string;
}

const AddNewTopicView = ({addTopic}: AddNewTopicViewProps) => {
  const [topicName, setTopicName] = useState<string>('');
  const checkLength = (topicName: string) => {
    if (topicName.length > 20) return true;
  };
  const handleSubmitForm = (values: FormikProps) => {
    let topic: TTopic = {
      id: Math.random(),
      title: values.title,
      icon: values.icon,
      iconColor: values.iconColor,
    };
    addTopic(topic);
    setTopicName('');
    setTimeout(() => {
      Navigator.navigateTo(SCREEN_NAME.MANUAL.ADD_NEW_CARD, {topic});
    }, 100);
  };

  const initialValues: FormikProps = {
    icon: iconCategories[0].data[0],
    iconColor: iconColors[0],
    title: '',
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmitForm,
    validationSchema: ADD_TOPIC_FORM_SCHEME,
  });
  return (
    <AppContainer backButton={true} title="ADD NEW TOPIC">
      <View style={styles.containerContent}>
        <View style={styles.addBox}>
          <View style={styles.addIconBox}>
            <AppText>Icon:</AppText>
            <TouchableOpacity
              style={[styles.icon, {backgroundColor: formik.values.iconColor}]}
              onPress={() =>
                Navigator.navigateTo(SCREEN_NAME.MANUAL.CHOOSE_ICON, {
                  callback: (iconName: SvgName, iconColor: string) => {
                    formik.setFieldValue('icon', iconName);
                    formik.setFieldValue('iconColor', iconColor);
                  },
                })
              }>
              <SvgComponent name={formik.values.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.addTopic}>
            <AppText>Topic:</AppText>
            <TextInput
              style={styles.inputTopic}
              placeholder="Input topic name"
              onChangeText={formik.handleChange('title')}
              value={formik.values.title}
            />
            {formik.errors.title && (
              <AppText color={colors.red}>{formik.errors.title}</AppText>
            )}
          </View>
        </View>
        <SubmitButton availableSubmit={true} submit={formik.handleSubmit} />
      </View>
    </AppContainer>
  );
};

export default AddNewTopicView;
