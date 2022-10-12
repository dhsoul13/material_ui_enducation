import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { filters } from '../../../helper/content';
import ClearIcon from '@mui/icons-material/Clear';

const MenuFilter = () => {
  const toggleDrawer = (anchor, open) => (event) => {
    // if (
    //   event.type === 'keydown' &&
    //   (event.key === 'Tab' || event.key === 'Shift')
    // ) {
    //   return;
    // }
    alert(1);
  };

  const [showMenu, setShowMenu] = useState(false);
  return (
    <Box>
      <Box>
        <IconButton
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        variant="persistent"
        open={showMenu}
        anchor="left"
        sx={{
          '& .MuiDrawer-paper': {
            top: '65px',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box>
          <IconButton
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <ClearIcon />
          </IconButton>
        </Box>

        <List>
          {filters.map((el) => (
            <ListItem key={el.id}>
              <ListItemButton>
                <ListItemText primary={el.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default MenuFilter;
