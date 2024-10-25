import {StyleSheet} from 'react-native';
import {colors} from '../../themes/color';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 10, flex: 1, backgroundColor: colors.white},
  addTopic: {
    marginVertical: 10,
  },
  inputTopic: {
    borderWidth: 1,
    backgroundColor: colors.white,
    marginTop: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: colors.gray,
  },
  listCard: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.gray_2,
    borderRadius: 5,
  },

  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {justifyContent: 'center', alignItems: 'center'},
  wordColumn: {width: '50%'},
  phoneticColumn: {
    width: '50%',
  },
});
export default styles;
