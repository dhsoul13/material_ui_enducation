import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../../store/slice/dataslice';
import { addError } from '../../../store/slice/showError';
import { removeAllAction } from '../../../store/slice/showAllAction';
import ErrorCustom from '../../../helper/ErrorCustom';
import { words } from '../../../helper/validate/validateBanWords/banRows';
import { validateBanWords } from '../../../helper/validate/validateBanWords';

const AddComponent = ({ addFuctionBd }) => {
  const { data } = useSelector((state) => state.data);
  const userId = useSelector((state) => state.auth);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handlerChangeText = (e) => {
    setText(e.target.value);
  };

  const handlerAddText = async () => {
    try {
      if (text) {
        if (text.length < 150) {
          dispatch(removeAllAction());
          let findBanWord = validateBanWords(text);

          if (findBanWord.findBanWord) {
            addFuctionBd({
              userId: userId.info.uid,
              content: {
                text: findBanWord.text,
                completed: false,
                date: new Date().toString(),
              },
            });
            setText('');
            throw new ErrorCustom({
              name: 'Cодержит матные слова',
              messange: 'Некультурно вообще-то',
              result: {
                text: 'Без мата как-то',
              },
            });
          } else {
            addFuctionBd({
              userId: userId.info.uid,
              content: {
                text: findBanWord.text,
                completed: false,
                date: new Date().toString(),
              },
            });
            setText('');
          }
        } else {
          throw new ErrorCustom({
            name: 'Слишком длинный текст',
            messange: `Текст должен быть меньше 150, а ваш ${text.length} символов`,
            result: {
              text: `Текст должен быть меньше 150, а ваш ${text.length} символов`,
            },
          });
        }
      } else {
        throw new ErrorCustom({
          name: 'Не вписанны данные',
          messange: 'Впишите данные',
          result: {
            text: 'Впишите текст, текст объязательный',
          },
        });
      }
    } catch (e) {
      console.error(e.result.text);
      dispatch(addError({ text: e.result.text }));
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
