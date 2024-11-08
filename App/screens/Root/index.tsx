import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, AddCardScreen, AccountScreen} from '../../screens/index';
import SCREEN_NAME from '../../navigation/ScreenName';
import HomeIcon from '../../assets/svg/common/homeIcon';
import AddIcon from '../../assets/svg/common/addIcon';
import AccountIcon from '../../assets/svg/common/accountIcon';

export type BottomTabsStackParamList = {
  HOME_SCREEN: undefined;
  ADD_CARD_SCREEN: undefined;
  ACCOUNT_SCREEN: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsStackParamList>();

const RootScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAME.ROOT.HOME_SCREEN}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#fff'},
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={SCREEN_NAME.ROOT.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={27}
              height={27}
              stroke={focused ? '#4A0E5C' : '#ccc'}
            />
          ),
        }}
      />

      <Tab.Screen
        name={SCREEN_NAME.ROOT.ADD_CARD_SCREEN}
        component={AddCardScreen}
        options={{
          tabBarIcon: ({focused}) => <AddIcon />,
        }}
      />

      <Tab.Screen
        name={SCREEN_NAME.ROOT.ACCOUNT_SCREEN}
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AccountIcon strokeColor={focused ? '#4A0E5C' : 'red'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootScreen;
