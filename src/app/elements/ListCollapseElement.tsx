import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import { List } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

interface TitleProps {
  title: string;
  isOpen?: boolean;
  children?: React.ReactNode;
}

function ListCollapseElement(props: TitleProps) {
  const { title, children, isOpen } = props;
  const [open, setOpen] = useState(isOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ pl: 4 }}>{children}</Box>
      </Collapse>
    </List>
  );
}

export default ListCollapseElement;
