import {TouchableOpacity, View} from 'react-native';
import {TCard} from '../../../types/Card';
import {AppText} from '../../../components';
import SvgComponent from '../../../assets/svg';
import {colors} from '../../../themes/color';
import {RowMap} from 'react-native-swipe-list-view';
export const HIDDEN_ITEM_LAYOUT = {
  width: 80,
  height: 80,
};
interface RenderHiddenItemProps {
  item: TCard;
  handleEdit: (item: TCard['id']) => void;
  handleDelete: (item: TCard['id']) => void;
  rowMap: RowMap<TCard>;
}
const RenderHiddenItem = ({
  item,
  handleEdit,
  handleDelete,
  rowMap,
}: RenderHiddenItemProps) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: HIDDEN_ITEM_LAYOUT.width,
          height: HIDDEN_ITEM_LAYOUT.height,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          if (rowMap[item.id]) {
            rowMap[item.id].closeRow();
          }
          handleEdit(item.id);
        }}>
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
};
export {RenderHiddenItem};
