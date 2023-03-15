import { Button, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import { useContext } from 'react';

import { defaultMessage } from '../../common/defaults';
import { IMessage } from '../../common/types';
import { messageValidation } from '../../common/validations';
import { MessageContext } from '../../services/message/MessageContext';
import AlertMessage from '../elements/AlertMessage';

const currencies = [
  {
    value: 1,
    label: 'Sports',
  },
  {
    value: 2,
    label: 'Finance',
  },
  {
    value: 3,
    label: 'Movies',
  },
];

function MessageForm() {
  const { postMessage, isLoading } = useContext(MessageContext);

  return (
    <>
      <AlertMessage />
      <Formik
        initialValues={defaultMessage}
        validationSchema={messageValidation}
        onSubmit={(values, actions) => {
          actions
            .validateForm(values)
            .then((result) => {
              if (result) {
                const data: IMessage = {
                  text: values.text,
                  category: values.category,
                };
                postMessage(data);
                values.text = '';
              }
            })
            .finally(() => actions.setSubmitting(false));
        }}
      >
        {({ errors, touched, values, handleChange, handleBlur }) => {
          return (
            <Form>
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid item xs={12} sm={8}>
                  <TextField
                    id="text"
                    name="text"
                    label="Message text"
                    multiline
                    rows={2}
                    fullWidth
                    error={!!touched.text && !!errors.text}
                    helperText={!!touched.text && errors.text}
                    value={values.text}
                    onBlur={handleBlur('text')}
                    onChange={handleChange('text')}
                    FormHelperTextProps={{
                      sx: { color: 'red' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="category"
                    select
                    required
                    fullWidth
                    label="Category"
                    SelectProps={{
                      native: true,
                    }}
                    value={values.category}
                    helperText="Select a category"
                    onBlur={handleBlur('category')}
                    onChange={handleChange('category')}
                    FormHelperTextProps={{
                      sx: { marginTop: '6px' },
                    }}
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={1}>
                  {isLoading ? (
                    <CircularProgress color="success" />
                  ) : (
                    <Button
                      disabled={isLoading}
                      type="submit"
                      variant="contained"
                      sx={{ mt: 0, ml: 1 }}
                    >
                      Send
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default MessageForm;
