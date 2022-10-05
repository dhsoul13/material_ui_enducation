import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const AddComponent = () => {
  const [text, setText] = useState('');

  const handlerChangeText = (e) => {
    setText(e.target.value);
  };

  const handlerAddText = () => {};

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        xs={12}
        md={10}
        item
      >
        <TextField
          label="Ввод дела"
          id="text"
          fullWidth
          onChange={handlerChangeText}
        />
      </Grid>
      <Grid
        xs={12}
        md={2}
        item
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: `100%`,
          }}
          onClick={handlerAddText}
        >
          Отправить
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddComponent;
