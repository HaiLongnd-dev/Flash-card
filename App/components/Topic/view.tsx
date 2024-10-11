import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AppText} from '../Core/AppText';
import SvgComponent, {SvgName} from '../../assets/svg';
import {colors} from '../../themes/color';

interface TopicViewProps {
  icon: SvgName;
  title: string;
  color: string;
}
const TopicView = ({title, icon, color}: TopicViewProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.icon}>
          <SvgComponent
            name={icon}
            color={color === '#FFFFFF' ? colors.black : color}
          />
        </View>
        <View style={styles.title}>
          <AppText fontSize={20}>{title}</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopicView;
