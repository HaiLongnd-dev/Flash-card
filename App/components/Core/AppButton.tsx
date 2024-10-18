import {TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {AppText} from './AppText';
import {colors} from '../../themes/color';

interface AppButtonProps {
  nameButton: string;
  handleButton: () => void;
}
const AppButton = ({nameButton, handleButton}: AppButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handleButton}>
        <View style={styles.title}>
          <AppText color={colors.white} fontSize={20}>
            {nameButton}
          </AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

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
