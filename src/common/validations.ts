import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'It is required',
  },
  string: {
    email: 'Invalid email',
    matches: 'Incorrect value',
  },
});

export const messageValidation = Yup.object().shape({
  text: Yup.string()
    .matches(/^[a-zA-Z0-9 ]+$/g, 'Only alphanumeric characters')
    .required(),
});
