import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText} from '../../components';
import {styles} from './style';
import {colors} from '../../themes/color';
import SvgComponent from '../../assets/svg';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';

const LoginScreenView = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText fontSize={35}>Login</AppText>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
        />
        <View style={styles.textInput}>
          <TextInput
            secureTextEntry={showPassword}
            autoCapitalize="none"
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.showPassword}
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            {showPassword ? (
              <SvgComponent name="UNLOCK" />
            ) : (
              <SvgComponent name="LOCK" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.forgot}>
          <AppText>Forgot Password</AppText>
        </View>
      </View>
      <AppButton nameButton="Sign In" handleButton={() => {}} />
      <View style={styles.signUp}>
        <AppText>Don't have an account?</AppText>
        <TouchableOpacity
          onPress={() => {
            Navigator.navigateTo(SCREEN_NAME.MANUAL.SIGN_UP);
          }}>
          <AppText color={colors.background}> Sign Up</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreenView;
