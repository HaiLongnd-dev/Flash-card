import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './navigation/Stack';
import {
  SafeAreaFrameContext,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
// import {persistor, store} from './redux/store';
import {store} from './redux/store';

const Index = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <StackScreens />
        {/* </PersistGate> */}
      </Provider>
    </SafeAreaProvider>
  );
};

export default Index;

const styles = StyleSheet.create({});
