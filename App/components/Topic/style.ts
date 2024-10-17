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
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    padding: 15,
    borderWidth: 1,
    borderColor: colors.gray_2,
    marginRight: 10,
    borderRadius: 10,
  },
  icon: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {justifyContent: 'center', alignItems: 'center'},
});
export default styles;
