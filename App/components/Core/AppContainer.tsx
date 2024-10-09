import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, colorType} from '../../themes/color';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from './AppText';
import Navigator from '../../navigation/NavigationService';

interface IAppContainer extends ViewProps {
  title: string;
  children: React.ReactNode;
}

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.backBtn} onPress={Navigator.goBack}>
      <AppText fontWeight={900} color={colors.white} fontSize={27}>
        {'<'}
      </AppText>
    </TouchableOpacity>
  );
};
export const AppContainer = ({title, children}: IAppContainer) => {
  const viewStyles = {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          <BackButton />
          <View style={styles.nameScreen}>
            <AppText fontWeight={900} color={colors.white} fontSize={21}>
              {title}
            </AppText>
          </View>
        </View>
      </View>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    paddingTop: 20,
    backgroundColor: '#4A0E5C',
  },

  titleBox: {
    flexDirection: 'row',
    marginHorizontal: 20,
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
});
