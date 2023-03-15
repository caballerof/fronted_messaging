import { Paper } from '@mui/material';
import Container from '@mui/material/Container';

import { logColumns } from '../../common/ColumnsName';
import LogTable from '../components/LogTable';
import MessageForm from '../components/MessageForm';

function FormScreen() {
  return (
    <>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Container
          component="main"
          maxWidth="xl"
          sx={{ my: { xs: 1, md: 1 }, p: { xs: 2, md: 1 } }}
        >
          <MessageForm />
        </Container>
      </Paper>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', my: 2 }}>
        <Container
          component="main"
          maxWidth="xl"
          sx={{ my: { xs: 1, md: 1 }, p: { xs: 2, md: 1 } }}
        >
          <LogTable columnsName={logColumns} />
        </Container>
      </Paper>
    </>
  );
}

export default FormScreen;
