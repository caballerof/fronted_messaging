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
  text: Yup.string().min(2, 'Insert at least 2 characters').required(),
});
