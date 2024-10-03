import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './navigation/Stack';
import {
  SafeAreaFrameContext,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
// import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const Index = () => {
  return (
    <SafeAreaProvider>
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <StackScreens />
      {/* </PersistGate> */}
      {/* </Provider> */}
    </SafeAreaProvider>
  );
};

export default Index;

const styles = StyleSheet.create({});
