import {StyleSheet} from 'react-native';
import {colors} from '../../themes/color';

const styles = StyleSheet.create({
  container: {},
  colorBox: {flexDirection: 'row'},
  colorTitle: {
    paddingVertical: 15,
    justifyContent: 'center',
  },
  colorList: {},
  color: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  title: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: colors.gray_2,
  },
  iconList: {justifyContent: 'center', alignItems: 'center'},
  icon: {padding: 5, borderWidth: 1, margin: 18, borderRadius: 5},
});
export default styles;
