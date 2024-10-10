import {StyleSheet} from 'react-native';
import {colors} from '../../themes/color';

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    paddingTop: 20,
    backgroundColor: '#4A0E5C',
  },

  titleBox: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  backBtn: {
    justifyContent: 'flex-start',
  },
  nameScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  containerContent: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  addBox: {
    flexDirection: 'row',
  },
  addIconBox: {},
  icon: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.gray,
  },
  addTopic: {marginLeft: 5, flex: 1},
  inputTopic: {
    borderWidth: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: colors.gray,
  },
});
export default styles;
