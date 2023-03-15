import CloseIcon from '@mui/icons-material/Close';
import { Box, Collapse, IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useContext } from 'react';

import { MessageContext } from '../../services/message/MessageContext';

function AlertMessage() {
  const { error, setError } = useContext(MessageContext);

  const deleteError = () => {
    setError(null);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={!!error}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={deleteError}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      </Collapse>
    </Box>
  );
}

export default AlertMessage;
