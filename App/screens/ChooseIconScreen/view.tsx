import React, {useEffect, useState} from 'react';
import {AppContainer} from '../../components/Core/AppContainer';
import {AppText} from '../../components';
import {FlatList, TouchableOpacity, View} from 'react-native';
import SvgComponent from '../../assets/svg';
import styles from './style';
import {iconColors} from './Constant/listColor';
import {iconCategories} from './Constant/listIcon';
import Navigator from '../../navigation/NavigationService';
import {AddTopicRouteProp} from '.';
type ChooseIconScreenViewProps = {route: AddTopicRouteProp};
const ChooseIconScreenView = ({route}: ChooseIconScreenViewProps) => {
  const {callback} = route.params;
  const iconName = iconCategories[0];
  const iconColor = iconColors[0];
  const [selectedIcon, setSelectedIcon] = useState(iconName);
  const [selectedColor, setSelectedColor] = useState(iconColor);
  const handleIcon = (name, color) => {
    setSelectedIcon(name);
    setSelectedColor(color);
    Navigator.goBack();
    callback(name, selectedColor);
  };
  return (
    <AppContainer title="CHOOSE ICON">
      <View style={styles.container}>
        <View style={styles.colorBox}>
          <View style={styles.colorTitle}>
            <AppText fontSize={18}>Color: </AppText>
          </View>
          <View style={styles.colorList}>
            <FlatList
              horizontal
              data={iconColors}
              renderItem={({item: color}) => (
                <TouchableOpacity
                  onPress={() => setSelectedColor(color)}
                  style={[
                    {
                      backgroundColor: color,
                    },
                    styles.color,
                  ]}>
                  {color === selectedColor ? (
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <SvgComponent name="CHECK" size={50} />
                    </View>
                  ) : (
                    <></>
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <FlatList
          data={iconCategories}
          renderItem={({item}) => (
            <View>
              <View style={styles.title}>
                <AppText fontSize={18}>{item.title}:</AppText>
              </View>
              <View style={styles.iconList}>
                <FlatList
                  numColumns={5}
                  data={item.data}
                  renderItem={icon => (
                    <TouchableOpacity
                      onPress={() => handleIcon(icon.item, selectedColor)}
                      style={[styles.icon, {backgroundColor: selectedColor}]}>
                      <SvgComponent size={30} name={icon.item} />
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          )}
        />
        <View style={{height: '35%'}} />
      </View>
    </AppContainer>
  );
};

export default ChooseIconScreenView;
