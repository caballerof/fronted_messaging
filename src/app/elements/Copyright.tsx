import { Link, Typography } from '@mui/material';
import * as React from 'react';

function Copyright() {
  return (
    <Typography sx={{ pt: 4 }} variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/francisco-reivaj-caballero/"
        target="_blank"
      >
        FJ Caballero
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
