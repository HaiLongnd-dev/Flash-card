import {StyleSheet} from 'react-native';
import {colors} from '../../themes/color';
import {error} from 'console';
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
  error: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  textInput: {
    backgroundColor: colors.gray_3,
    height: 50,
    width: '100%',
    borderRadius: 15,
    paddingLeft: 20,
    marginBottom: 5,
  },
  email: {
    flexDirection: 'column',
    marginBottom: 25,
  },
  password: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  showPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  flexEnd: {
    width: '100%',
    alignItems: 'flex-end',
  },
  signUp: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  warning: {
    marginTop: 10,
    marginLeft:10
  },
});
