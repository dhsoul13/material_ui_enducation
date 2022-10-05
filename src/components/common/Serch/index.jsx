import React, { useState } from 'react';
import { Box, Button, Drawer, Grid, TextField } from '@mui/material';
const SerchCommon = ({ onClick, state, setSerch, search, searchText }) => {
  const handlerTextValue = () => {};
  return (
    <>
      <Drawer
        anchor="top"
        open={state}
      >
        <Grid
          columnSpacing={10}
          container
          sx={{
            padding: '50px',
          }}
        >
          <Grid
            item
            xs={10}
          >
            <TextField
              fullWidth
              label="Поиск"
              id="search"
              onChange={(e) => {
                setSerch(e.target.value);
              }}
            />
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button
              onClick={() => {
                search(searchText);
                onClick();
              }}
              variant="contained"
              sx={{
                height: `100%`,
              }}
              fullWidth
            >
              Найти
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default SerchCommon;
