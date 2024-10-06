import {StyleSheet} from 'react-native';
import {colors} from '../../themes/color';

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    paddingTop: 20,
    paddingLeft: 15,
    backgroundColor: '#4A0E5C',
    height: '30%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  titleBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.white,
  },
  addBox: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '8%',
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 25,
    shadowColor: colors.black,
    elevation: 10,
  },
  addLanguage: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
export default styles;
