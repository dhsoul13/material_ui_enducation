import {
  AppBar,
  Box,
  Drawer,
  Grid,
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
  const [showMenu, setShowMenu] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setShowMenu(open);
  };
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
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        open={showMenu}
        anchor="left"
      >
        <Grid>
          <Grid>
            <IconButton
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <ClearIcon />
            </IconButton>
          </Grid>

          <Grid>
            {filters.map((el) => (
              <ListItem key={el.id}>
                <ListItemButton
                  onClick={() => {
                    alert(1);
                  }}
                >
                  <ListItemText primary={el.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
};

export default MenuFilter;

// sx={{
//     '& .MuiDrawer-paper': {
//       top: '65px',

//       boxSizing: 'border-box',
//     },
//   }}
