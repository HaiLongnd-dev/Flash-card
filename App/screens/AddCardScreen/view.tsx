import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText} from '../../components';
import {colors} from '../../themes/color';
import LanguageCategory from '../../components/languageCategory';
import {TCategory} from '../../types/Category';

interface AddCardScreenViewProps {
  data: TCategory[];
}
const AddCardScreenView = ({data}: AddCardScreenViewProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          <AppText fontWeight={900} color={colors.white} fontSize={21}>
            ADD FLASHCARD
          </AppText>
        </View>
      </View>
      <View style={styles.addBox}>
        <View style={styles.addLanguage}>
          <AppText fontSize={21} color={colors.black} align="center">
            Choose a language card
          </AppText>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <LanguageCategory icon={item.icon} title={item.title} />
            )}
          />

          {/* <LanguageCategory icon={data[0].icon} title="English" /> */}
        </View>
      </View>
    </View>
  );
};

export default AddCardScreenView;
