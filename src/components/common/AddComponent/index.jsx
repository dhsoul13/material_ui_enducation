import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../../store/slice/dataslice';
import { addError } from '../../../store/slice/showError';
import { removeAllAction } from '../../../store/slice/showAllAction';

const AddComponent = ({ addFuctionBd }) => {
  const { data } = useSelector((state) => state.data);
  const userId = useSelector((state) => state.auth);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handlerChangeText = (e) => {
    setText(e.target.value);
  };

  const handlerAddText = async () => {
    dispatch(removeAllAction());
    if (text) {
      await addFuctionBd({
        userId: userId.info.uid,
        content: {
          text: text,
          completed: false,
          date: new Date().toString(),
        },
      });
    } else {
      dispatch(addError({ text: 'Введите текст' }));
    }

    console.log(userId.info.uid);
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
