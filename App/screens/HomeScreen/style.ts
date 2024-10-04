import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    paddingTop: 60,
    paddingLeft: 15,
    backgroundColor: '#4A0E5C',
    height: '30%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerBox: {
    flexDirection: 'row',
  },
  avaBox: {},
  ava: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  userNameBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  searchBox: {
    position: 'absolute',
    top: '16%',
    marginHorizontal: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    elevation: 10,
  },
  searchBoxTitle: {fontSize: 18, fontWeight: '500'},
  searchBoxDesc: {fontSize: 12, paddingTop: 8, lineHeight: 16},
  searchBoxInput: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  icon: {padding: 15},
  searchInput: {},
  categories: {position: 'absolute', top: '42%', marginHorizontal: 15},
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  categoriesTitle: {fontSize: 18, fontWeight: '500'},
  categoriesBtn: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: '#4A0E5C',
    borderRadius: 10,
  },
  categoriesBtnText: {fontSize: 14, fontWeight: 'bold', color: '#fff'},
  categoriesContainer: {
    flexDirection: 'row',
  },
});
export default styles;
