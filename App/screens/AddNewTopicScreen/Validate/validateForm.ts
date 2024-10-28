import * as Yup from 'yup';

export const ADD_TOPIC_FORM_SCHEME = Yup.object().shape({
  iconColor: Yup.string().required('Wrong color!'),
  title: Yup.string().required('Exceeds the specified number of characters!'),
});
