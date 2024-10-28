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
import {Formik, validateYupSchema} from 'formik';
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
  const initIcon = iconCategories[0].data[0];
  const initColor = iconColors[0];

  const [iconName, setIconName] = useState<SvgName>(initIcon);
  const [iconColor, setIconColor] = useState<string>(initColor);

  const [topicName, setTopicName] = useState<string>('');
  const checkLength = (topicName: string) => {
    if (topicName.length > 20) return true;
  };

  const initialValues: FormikProps = {
    icon: iconCategories[0].data[0],
    iconColor: iconColors[0],
    title: '',
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

  return (
    <Formik
      validationSchema={ADD_TOPIC_FORM_SCHEME}
      initialValues={initialValues}
      onSubmit={handleSubmitForm}>
      {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
        <AppContainer backButton={true} title="ADD NEW TOPIC">
          <View style={styles.containerContent}>
            <View style={styles.addBox}>
              <View style={styles.addIconBox}>
                <AppText>Icon:</AppText>
                <TouchableOpacity
                  style={[styles.icon, {backgroundColor: values.iconColor}]}
                  onPress={() =>
                    Navigator.navigateTo(SCREEN_NAME.MANUAL.CHOOSE_ICON, {
                      callback: (iconName: SvgName, iconColor: string) => {
                        setFieldValue('icon', iconName);
                        setFieldValue('iconColor', iconColor);
                      },
                    })
                  }>
                  <SvgComponent name={values.icon} />
                </TouchableOpacity>
              </View>
              <View style={styles.addTopic}>
                <AppText>Topic:</AppText>
                <TextInput
                  style={styles.inputTopic}
                  placeholder="Input topic name"
                  onChangeText={handleChange('title')}
                  value={values.title}
                />
                {errors.title && (
                  <AppText color={colors.red}>
                    Exceeds the specified number of characters!
                  </AppText>
                )}
              </View>
            </View>
            <SubmitButton availableSubmit={true} submit={handleSubmit} />
          </View>
        </AppContainer>
      )}
    </Formik>
  );
};

export default AddNewTopicView;
