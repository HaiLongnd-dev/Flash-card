import {StyleSheet} from 'react-native';
import {colors} from '../../themes/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.gray,
  },
  icon: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {justifyContent: 'center', alignItems: 'center'},
});
export default styles;
