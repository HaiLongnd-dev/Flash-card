import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText} from '../core/AppText';

interface submitButtonViewProps {
  submit: () => void;
}
const SubmitButtonView = ({submit}: submitButtonViewProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={submit}>
        <View style={styles.title}>
          <AppText fontSize={20}>SUBMIT</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButtonView;
