import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, colorType} from '../../themes/color';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from './AppText';
import Navigator from '../../navigation/NavigationService';
import SvgComponent from '../../assets/svg';
import SCREEN_NAME from '../../navigation/ScreenName';
import ConfirmModal from './ConfirmModal';
import {useState} from 'react';

interface IAppContainer extends ViewProps {
  title: string;
  children: React.ReactNode;
  backButton: boolean;
  backHome?: boolean;
}

export const AppContainer = ({
  title,
  children,
  backHome,
  backButton,
}: IAppContainer) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    Navigator.navigateTo(SCREEN_NAME.ROOT.HOME_SCREEN);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  const BackHome = () => {
    return (
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          setModalVisible(true);
        }}>
        <AppText fontWeight={900} color={colors.white} fontSize={27}>
          <SvgComponent name="CHECK" size={40} color={colors.white} />
        </AppText>
      </TouchableOpacity>
    );
  };
  const BackButton = () => {
    return (
      <TouchableOpacity style={styles.backBtn} onPress={Navigator.goBack}>
        <AppText fontWeight={900} color={colors.white} fontSize={27}>
          {'<'}
        </AppText>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ConfirmModal
        message="Are you want to continue?"
        visible={modalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <View style={styles.header}>
        <View style={styles.titleBox}>
          {backButton ? <BackButton /> : <></>}
          <View style={styles.nameScreen}>
            <AppText fontWeight={900} color={colors.white} fontSize={21}>
              {title}
            </AppText>
          </View>
          {backHome ? <BackHome /> : <></>}
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
