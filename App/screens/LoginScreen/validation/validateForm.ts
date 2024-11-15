import * as Yup from 'yup';

export const LOGIN_FORM_SCHEME = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Exceeds the specified number of characters!'),
});
