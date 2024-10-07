import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText} from '../../components';
import {colors} from '../../themes/color';
import LanguageCategory from '../../components/languageCategory';
import {TCategory} from '../../types/Category';
import NavigationScreenButton from '../../components/navigationScreenButton';
import Navigator from '../../navigation/NavigationService';

interface AddCardScreenViewProps {
  data: TCategory[];
}
const AddCardScreenView = ({data}: AddCardScreenViewProps) => {
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
              ADD FLASHCARD
            </AppText>
          </View>
        </View>
      </View>
      <View style={styles.addBox}>
        <View style={styles.addLanguage}>
          <AppText fontSize={21} color={colors.black} align="center">
            Choose a topic card
          </AppText>
          <AppText fontSize={21} color={colors.black} align="center">
            ------- or -------
          </AppText>
          <NavigationScreenButton
            nameButton={'ADD NEW TOPIC'}
            nameScreen={'ADD_NEW_TOPIC'}
          />

          <FlatList
            data={data}
            renderItem={({item}) => (
              <LanguageCategory icon={item.icon} title={item.title} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default AddCardScreenView;
