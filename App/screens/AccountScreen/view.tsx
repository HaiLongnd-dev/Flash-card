import {Image, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import {AppText} from '../../components';
import {colors} from '../../themes/color';
import Navigator from '../../navigation/NavigationService';
import SvgComponent from '../../assets/svg';
import StudyProgressChart from './Components/Chart';

interface AccountScreenViewProps {
  cardAdded: number;
  totalStudyTime: number;
  getTotalTimeAction: () => void;
}
const AccountScreenView = ({
  cardAdded,
  totalStudyTime,
  getTotalTimeAction,
}: AccountScreenViewProps) => {
  useEffect(() => {
    getTotalTimeAction;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => Navigator.goBack()}>
            <SvgComponent name="ARROW_LEFT" color={colors.white} size={30} />
          </TouchableOpacity>
          <View style={styles.avaBox}>
            <Image
              style={styles.ava}
              source={require('../../assets/images/ava.jpg')}
            />
          </View>
          <View style={styles.userNameBox}>
            <AppText style={styles.userName}> Hải Long</AppText>
            <AppText fontSize={12} color={colors.white}>
              Nghe An, Viet Nam
            </AppText>
          </View>
        </View>
      </View>
      <View style={styles.countingBox}>
        <View style={styles.cardAdded}>
          <View style={styles.icon}>
            <SvgComponent name="LIGHTNING" color={colors.black} size={30} />
          </View>
          <View style={styles.detail}>
            <AppText fontWeight={600} fontSize={20}>
              {cardAdded}
            </AppText>
            <AppText>Cards added</AppText>
          </View>
        </View>
        <SvgComponent name="LINE" size={50} />
        <View style={styles.hoursSpent}>
          <View style={styles.icon}>
            <SvgComponent name="CLOCK" color={colors.black} size={30} />
          </View>
          <View style={styles.detail}>
            <AppText fontWeight={600} fontSize={20}>
              {totalStudyTime}
            </AppText>
            <AppText>Hours Spent</AppText>
          </View>
        </View>
      </View>
      <View style={styles.chartBox}>
        <StudyProgressChart />
      </View>
    </View>
  );
};

export default AccountScreenView;
