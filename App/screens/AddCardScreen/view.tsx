import {View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText} from '../../components';
import {colors} from '../../themes/color';
import LanguageCategory from '../../components/languageCategory';
import HomeIcon from '../../assets/svg/common/homeIcon';
import SubmitButton from '../../components/submitButton';

const AddCardScreenView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          <AppText fontWeight={900} color={colors.white} fontSize={21}>
            ADD CATEGORY
          </AppText>
        </View>
      </View>
      <View style={styles.addBox}>
        <View style={styles.addLanguage}>
          <AppText fontSize={21} color={colors.black} align="center">
            Choose a language card
          </AppText>
          <LanguageCategory icon={<HomeIcon />} title="English" />
          <LanguageCategory icon={<HomeIcon />} title="English" />
          <LanguageCategory icon={<HomeIcon />} title="English" />
          <LanguageCategory icon={<HomeIcon />} title="English" />
          <LanguageCategory icon={<HomeIcon />} title="English" />
          <LanguageCategory icon={<HomeIcon />} title="English" />
        </View>
      </View>
    </View>
  );
};

export default AddCardScreenView;
