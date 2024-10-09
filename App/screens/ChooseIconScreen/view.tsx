import React from 'react';
import {AppContainer} from '../../components/Core/AppContainer';
import {AppText} from '../../components';
import {FlatList, View} from 'react-native';
import SvgComponent, {SvgName} from '../../assets/svg';
import styles from './style';
interface IIconCategories {
  title: string;
  data: SvgName[];
}
const iconCategories: IIconCategories[] = [
  {
    title: 'Food',
    data: [
      'FOOD1',
      'FOOD2',
      'FOOD3',
      'FOOD4',
      'FOOD5',
      'FOOD6',
      'FOOD7',
      'FOOD8',
      'FOOD9',
      'FOOD10',
    ],
  },
  {
    title: 'Shopping',
    data: [
      'SHOPPING1',
      'SHOPPING2',
      'SHOPPING3',
      'SHOPPING4',
      'SHOPPING5',
      'SHOPPING6',
      'SHOPPING7',
      'SHOPPING8',
      'SHOPPING9',
      'SHOPPING10',
    ],
  },
  {
    title: 'Travel',
    data: [
      'TRAVEL1',
      'TRAVEL2',
      'TRAVEL3',
      'TRAVEL4',
      'TRAVEL5',
      'TRAVEL6',
      'TRAVEL7',
      'TRAVEL8',
      'TRAVEL9',
      'TRAVEL10',
    ],
  },
  {
    title: 'Finance',
    data: [
      'FINANCE1',
      'FINANCE2',
      'FINANCE3',
      'FINANCE4',
      'FINANCE5',
      'FINANCE6',
      'FINANCE7',
      'FINANCE8',
      'FINANCE9',
      'FINANCE10',
    ],
  },
  {
    title: 'Self',
    data: [
      'SELF1',
      'SELF2',
      'SELF3',
      'SELF4',
      'SELF5',
      'SELF6',
      'SELF7',
      'SELF8',
      'SELF9',
      'SELF10',
    ],
  },
  {
    title: 'Health',
    data: [
      'HEALTH1',
      'HEALTH2',
      'HEALTH3',
      'HEALTH4',
      'HEALTH5',
      'HEALTH6',
      'HEALTH7',
      'HEALTH8',
      'HEALTH9',
      'HEALTH10',
    ],
  },
  {
    title: 'Pet',
    data: [
      'PET1',
      'PET2',
      'PET3',
      'PET4',
      'PET5',
      'PET6',
      'PET7',
      'PET8',
      'PET9',
      'PET10',
    ],
  },
];

const ChooseIconScreenView = () => {
  return (
    <AppContainer title="CHOOSE ICON">
      <View style={styles.container}>
        <AppText>Color:</AppText>
        {iconCategories.map((item, index) => (
          <View>
            <View style={styles.title}>
              <AppText fontSize={18} key={index}>{item.title}:</AppText>
            </View>
            <View>
              <FlatList
                horizontal
                data={item.data}
                renderItem={icon => (
                  <View style={styles.icon}>
                    <SvgComponent size={30} name={icon.item} />
                  </View>
                )}
              />
            </View>
          </View>
        ))}
      </View>
    </AppContainer>
  );
};

export default ChooseIconScreenView;
{
  /* <FlatList
        data={iconCategories}
        renderItem={({item}) => <AppText> {item.title}</AppText>}
      /> */
}
