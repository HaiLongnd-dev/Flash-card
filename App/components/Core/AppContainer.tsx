import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../themes/color';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';
import {AppText} from './AppText';
import Navigator from '../../navigation/NavigationService';
import SvgComponent from '../../assets/svg';

interface IAppContainer extends ViewProps {
  title: string;
  children: React.ReactNode;
  backButton: boolean;
  haveRightButton?: boolean;
  rightButton?: React.ReactNode;
}

export const AppContainer = ({
  title,
  children,
  backButton,
  haveRightButton = false,
  rightButton,
}: IAppContainer) => {
  const BackButton = () => {
    return (
      <TouchableOpacity style={styles.backBtn} onPress={Navigator.goBack}>
        <SvgComponent name="ARROW_LEFT" size={30} color={colors.white} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          {backButton && <BackButton />}
          <View style={styles.nameScreen}>
            <AppText fontWeight={900} color={colors.white} fontSize={21}>
              {title}
            </AppText>
          </View>
          {haveRightButton ? (
            <View style={styles.backBtn}>{rightButton}</View>
          ) : (
            <></>
          )}
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleBox: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  backBtn: {
    justifyContent: 'flex-start',
  },
  nameScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
