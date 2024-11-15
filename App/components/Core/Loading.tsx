// Loading.js
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/auth';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';

const Loading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      user
        ? Navigator.navigateTo(SCREEN_NAME.MANUAL.ROOT)
        : Navigator.navigateTo(SCREEN_NAME.MANUAL.LOG_IN);
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, [navigation]);

  return null; // Return null or a loading spinner if needed
};

export default Loading;
