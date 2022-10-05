import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddComponent = () => {
  const [text, setText] = useState('');

  const handlerChangeText = (e) => {
    setText(e.target.value);
  };

  const handlerAddText = () => {
    alert(text);
  };
  return (
    <Grid container>
      <Grid xs={10}>
        <TextField
          label="Ввод дела"
          fullWidth
          id="text"
          onChange={handlerChangeText}
        />
      </Grid>
      <Grid xs={2}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: `100%`,
            ml: `10px`,
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
