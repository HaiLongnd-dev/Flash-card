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
  textInput: {
    backgroundColor: colors.gray_3,
    height: 50,
    width: '100%',
    borderRadius: 15,
    marginBottom: 20,
    paddingLeft: 30,
  },
  showPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  signUp: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  error: {
    marginBottom: 15,
    alignItems: 'flex-start',
    width: '100%',
  },
  password: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
