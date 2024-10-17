import {View} from 'react-native';
import {TCard} from '../../../types/Card';
import {colors} from '../../../themes/color';
import {AppText} from '../../../components';
import {HIDDEN_ITEM_LAYOUT} from './RenderHidenItem';
const RenderItem = ({item}: {item: TCard}) => (
  <View
    style={{
      backgroundColor: colors.white,
      borderBottomWidth: 1,
      height: HIDDEN_ITEM_LAYOUT.height,
      justifyContent: 'center',
      paddingLeft: 20,
    }}>
    <AppText>{item.content}</AppText>
  </View>
);
export {RenderItem};
