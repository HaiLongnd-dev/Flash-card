import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText} from '../../components';
import {styles} from './style';
import {colors} from '../../themes/color';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';
import {useFormik} from 'formik';
import {SIGN_UP_FORM_SCHEME} from './validation/validateForm';
import SvgComponent from '../../assets/svg';
import auth from '@react-native-firebase/auth';
interface FormikProps {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUpScreenView = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleSubmitForm = async (values: FormikProps) => {
    const {email, password} = values;

    try {
      await auth().createUserWithEmailAndPassword(email, password);

      Navigator.navigateTo(SCREEN_NAME.MANUAL.ROOT);
    } catch (error) {
      console.log(error);
    }
  };
  const initialValues: FormikProps = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmitForm,
    validationSchema: SIGN_UP_FORM_SCHEME,
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText fontSize={35}>Sign up</AppText>
      </View>
      <View style={styles.inputBox}>
        <View style={styles.textInput}>
          <TextInput
            autoCapitalize="none"
            placeholder="User name"
            onChangeText={formik.handleChange('userName')}
            value={formik.values.userName}
          />
          {formik.errors.userName && (
            <View style={styles.error}>
              <AppText color={colors.red}>{formik.errors.userName}</AppText>
            </View>
          )}
        </View>
        <View style={styles.textInput}>
          <TextInput
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <View style={styles.error}>
              <AppText color={colors.red}>{formik.errors.email}</AppText>
            </View>
          )}
        </View>
        <View style={styles.textInput}>
          <View style={styles.password}>
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
          {formik.errors.password && (
            <View style={styles.error}>
              <AppText color={colors.red}>{formik.errors.password}</AppText>
            </View>
          )}
        </View>
        <View style={styles.textInput}>
          <View style={styles.password}>
            <TextInput
              secureTextEntry={showConfirmPassword}
              autoCapitalize="none"
              placeholder="Confirm password"
              onChangeText={formik.handleChange('confirmPassword')}
              value={formik.values.confirmPassword}
            />
            <TouchableOpacity
              style={styles.showPassword}
              onPress={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}>
              {showConfirmPassword ? (
                <SvgComponent name="UNLOCK" />
              ) : (
                <SvgComponent name="LOCK" />
              )}
            </TouchableOpacity>
          </View>
          {formik.errors.confirmPassword && (
            <View style={styles.error}>
              <AppText color={colors.red}>
                {formik.errors.confirmPassword}
              </AppText>
            </View>
          )}
        </View>
      </View>
      <AppButton nameButton="Sign up" handleButton={formik.handleSubmit} />
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

export default SignUpScreenView;
