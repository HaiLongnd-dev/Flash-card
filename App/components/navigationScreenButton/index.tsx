import React from 'react';
import SCREEN_NAME from '../../navigation/ScreenName';
import NavigationScreenButtonView from './view';

interface NavigationScreenButtonProps {
  nameButton: string;
  nameScreen: keyof typeof SCREEN_NAME.MANUAL;
}
const NavigationScreenButton = ({
  nameButton,
  nameScreen,
}: NavigationScreenButtonProps) => {
  return (
    <NavigationScreenButtonView
      nameButton={nameButton}
      nameScreen={nameScreen}
    />
  );
};

export default NavigationScreenButton;
