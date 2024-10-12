import {TouchableOpacity, View} from 'react-native';
import {TCard} from '../../../types/Card';
import {AppText} from '../../../components';

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
      style={{backgroundColor: 'blue', padding: 20}}
      onPress={() => handleEdit(item.id)}>
      <AppText style={{color: 'white'}}>Edit</AppText>
    </TouchableOpacity>
    <TouchableOpacity
      style={{backgroundColor: 'red', padding: 20}}
      onPress={() => handleDelete(item.id)}>
      <AppText style={{color: 'white'}}>Delete</AppText>
    </TouchableOpacity>
  </View>
);
export {RenderHiddenItem};
