import * as Yup from 'yup';

export const SIGN_UP_FORM_SCHEME = Yup.object().shape({
  userName: Yup.string()
    .min(6, 'Must be at least 6 characters!')
    .max(20, 'Cannot exceed 20 characters!')
    .required('Username is required'),

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
