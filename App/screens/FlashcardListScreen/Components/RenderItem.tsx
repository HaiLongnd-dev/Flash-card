import {View} from 'react-native';
import {TCard} from '../../../types/Card';
import {colors} from '../../../themes/color';
import {AppText} from '../../../components';

const RenderItem = ({item}: {item: TCard}) => (
  <View
    style={{
      padding: 20,
      backgroundColor: colors.white,
      borderBottomWidth: 1,
    }}>
    <AppText>{item.content}</AppText>
  </View>
);
export {RenderItem};
