import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const HeaderCommon = ({ onClick }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
            }}
          >
            Todolist
          </Typography>
          <IconButton
            color="inherit"
            onClick={onClick}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderCommon;
