import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText} from '../../components';
import {styles} from './style';
import {colors} from '../../themes/color';
import SvgComponent from '../../assets/svg';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';
import {useFormik} from 'formik';
import {LOGIN_FORM_SCHEME} from './validation/validateForm';
import auth, {firebase} from '@react-native-firebase/auth';

interface FormikProps {
  email: string;
  password: string;
}
const LoginScreenView = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [isError, setIsError] = useState(false);
  const handleSubmitForm = async () => {
    if (
      formik.values.email.trim() !== '' &&
      formik.values.password.trim() !== ''
    ) {
      try {
        // Attempt to sign in the user
        await firebase
          .auth()
          .signInWithEmailAndPassword(
            formik.values.email,
            formik.values.password,
          );
        formik.resetForm();

        Navigator.navigateTo(SCREEN_NAME.MANUAL.ROOT); // Navigate to the main screen on successful login
      } catch (error) {
        setIsError(true);
      }
    }
  };
  const initialValues: FormikProps = {
    email: '',
    password: '',
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmitForm,
    validationSchema: LOGIN_FORM_SCHEME,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText fontSize={35}>Login</AppText>
      </View>
      <View style={styles.inputBox}>
        <View style={[styles.textInput, styles.email]}>
          <TextInput
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
          />
          <View style={styles.error}>
            {formik.errors.email && (
              <AppText align="center" color={colors.red}>
                {formik.errors.email}
              </AppText>
            )}
          </View>
        </View>
        <View style={[styles.textInput, styles.password]}>
          <TextInput
            secureTextEntry={showPassword}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
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
        <TouchableOpacity style={styles.flexEnd}>
          <AppText>Forgot Password</AppText>
        </TouchableOpacity>
      </View>
      <AppButton nameButton="Sign In" handleButton={formik.handleSubmit} />
      {isError && (
        <View style={styles.warning}>
          <AppText style={{color: colors.red}}>
            The Username or Password is Incorrect!
          </AppText>
        </View>
      )}
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
