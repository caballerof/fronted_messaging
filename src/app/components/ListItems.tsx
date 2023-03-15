import { Message } from '@mui/icons-material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <Link to={`/`}>
      <ListItemButton>
        <ListItemIcon>
          <Message />
        </ListItemIcon>
        <ListItemText primary="Send Msg" />
      </ListItemButton>
    </Link>
    <Link to={`/add`}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Categories Msg" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Repositories
    </ListSubheader>
    <a
      target="_blank"
      href="https://github.com/caballerof/fronted_messaging"
      rel="noreferrer"
    >
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="GitHub Frontend" />
      </ListItemButton>
    </a>
    <a
      target="_blank"
      href="https://github.com/caballerof/messaging_server"
      rel="noreferrer"
    >
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="GitHub Backend" />
      </ListItemButton>
    </a>
  </React.Fragment>
);
