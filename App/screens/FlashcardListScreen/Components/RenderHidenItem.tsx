import {TouchableOpacity, View} from 'react-native';
import {TCard} from '../../../types/Card';
import {AppText} from '../../../components';
import SvgComponent from '../../../assets/svg';
import {colors} from '../../../themes/color';
export const HIDDEN_ITEM_LAYOUT = {
  width: 80,
  height: 80,
};
interface RenderHiddenItemProps {
  item: TCard;
  handleEdit: (item: TCard['id']) => void;
  handleDelete: (item: TCard['id']) => void;
}
const RenderHiddenItem = (
  {item, handleEdit, handleDelete}: RenderHiddenItemProps,
  rowMap: any,
) => (
  <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
    <TouchableOpacity
      style={{
        backgroundColor: 'blue',
        width: HIDDEN_ITEM_LAYOUT.width,
        height: HIDDEN_ITEM_LAYOUT.height,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => handleEdit(item.id)}>
      <SvgComponent name="EDIT" color={colors.white} />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        backgroundColor: 'red',
        width: HIDDEN_ITEM_LAYOUT.width,
        height: HIDDEN_ITEM_LAYOUT.height,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => handleDelete(item.id)}>
      <SvgComponent name="DELETE" color={colors.white} />
    </TouchableOpacity>
  </View>
);
export {RenderHiddenItem};
