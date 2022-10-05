import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const HeaderCommon = () => {
  return (
    <AppBar position="static">
      <Container fixed>
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
            }}
          >
            Todolist
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderCommon;
