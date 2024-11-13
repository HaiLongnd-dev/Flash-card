import {StyleSheet} from 'react-native';
import {colors} from '../../themes/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  header: {alignItems: 'flex-start', marginBottom: 50},
  inputBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: colors.gray_3,
    height: 50,
    width: '100%',
    borderRadius: 15,
    paddingLeft: 30,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  forgot: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
  },
  signUp: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
