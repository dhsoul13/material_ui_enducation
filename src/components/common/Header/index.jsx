import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
const HeaderCommon = ({ onClick }) => {
  const { isShow } = useSelector((state) => state.auth);

  return (
    <AppBar position="fixed">
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
          {isShow ? (
            <IconButton
              color="inherit"
              onClick={onClick}
            >
              <SearchIcon />
            </IconButton>
          ) : (
            ''
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderCommon;
