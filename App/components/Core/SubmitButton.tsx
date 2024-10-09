import {TouchableOpacity, View, StyleSheet} from 'react-native';

import React from 'react';
import {AppText} from './AppText';
import {colors} from '../../themes/color';

interface submitButtonProps {
  submit: () => void;
}
const SubmitButton = ({submit}: submitButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={submit}>
        <View style={styles.title}>
          <AppText color={colors.white} fontSize={20}>
            SUBMIT
          </AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A0E5C',
    marginTop: 10,
    borderRadius: 5,
    shadowColor: colors.black,
    elevation: 10,
    padding: 10,
  },
  title: {justifyContent: 'center', alignItems: 'center'},
});
