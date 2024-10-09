import {TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {AppText} from '../Core/AppText';
import SCREEN_NAME from '../../navigation/ScreenName';
import Navigator from '../../navigation/NavigationService';
import {colors} from '../../themes/color';

interface NavigationScreenButtonProps {
  nameButton: string;
  nameScreen: keyof typeof SCREEN_NAME.MANUAL;
}
const NavigationScreenButton = ({
  nameButton,
  nameScreen,
}: NavigationScreenButtonProps) => {
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

export default NavigationScreenButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A0E5C',
    marginTop: 10,
    borderRadius: 5,
    shadowColor: '#000',
    elevation: 10,
    padding: 10,
  },
  title: {justifyContent: 'center', alignItems: 'center'},
});
