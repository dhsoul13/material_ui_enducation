import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../../store/slice/dataslice';

const AddComponent = () => {
  const { data } = useSelector((state) => state.data);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handlerChangeText = (e) => {
    setText(e.target.value);
  };

  const handlerAddText = () => {
    if (text) {
      const mas = [
        ...data,
        {
          userID: 1,
          id: data.length + 1,
          title: text,
          completed: false,
        },
      ];

      dispatch(addData(mas));

      setText('');
    }
  };

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
          value={text}
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
