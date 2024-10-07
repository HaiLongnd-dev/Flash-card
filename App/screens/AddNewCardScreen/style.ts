import {StyleSheet} from 'react-native';
import {colors} from '../../themes/color';

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    paddingTop: 20,
    backgroundColor: '#4A0E5C',
    height: '30%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
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
  addTopic: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  inputTopic: {
    borderWidth: 1,
    backgroundColor: colors.white,
    marginTop: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: colors.gray,
  },
});
export default styles;
