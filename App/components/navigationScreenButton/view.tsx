import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText} from '../core/AppText';
import SCREEN_NAME from '../../navigation/ScreenName';
import Navigator from '../../navigation/NavigationService';
import {colors} from '../../themes/color';

interface NavigationScreenButtonViewProps {
  nameButton: string;
  nameScreen: keyof typeof SCREEN_NAME.MANUAL;
}
const NavigationScreenButtonView = ({
  nameButton,
  nameScreen,
}: NavigationScreenButtonViewProps) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          Navigator.navigateTo(SCREEN_NAME.MANUAL[nameScreen]);
        }}>
        <View style={styles.title}>
          <AppText color={colors.white} fontSize={20}>
            {nameButton}
          </AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationScreenButtonView;
