import {StyleSheet} from 'react-native';
import { colors } from '../../themes/color';

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
export default styles;
