import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  backBtn: {position: 'absolute', top: 0, left: 0},
  header: {
    paddingTop: 40,
    paddingLeft: 15,
    backgroundColor: '#4A0E5C',
    height: '30%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avaBox: {},
  ava: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  userNameBox: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  countingBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: '25%',
    right: '10%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 25,
    shadowColor: '#000',
    elevation: 10,
    flexDirection: 'row',
    width: '80%',
  },
  icon: {justifyContent: 'center', alignItems: 'center', paddingRight: 10},
  cardAdded: {
    flexDirection: 'row',
  },
  hoursSpent: {
    flexDirection: 'row',
  },
  detail: {},
  chartBox: {
    marginTop: 40,
  },
});
export default styles;
