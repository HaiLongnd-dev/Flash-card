import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText} from '../../components';
import {styles} from './style';
import {colors} from '../../themes/color';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';

const LoginScreenView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText fontSize={35}>Sign up</AppText>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="User name"
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
        />

        <TextInput
          style={styles.textInput}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Confirm password"
        />
      </View>
      <AppButton nameButton="Sign up" handleButton={() => {}} />
      <View style={styles.signUp}>
        <AppText>Already have an account?</AppText>
        <TouchableOpacity
          onPress={() => {
            Navigator.navigateTo(SCREEN_NAME.MANUAL.LOG_IN);
          }}>
          <AppText color={colors.background}> Login</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreenView;
