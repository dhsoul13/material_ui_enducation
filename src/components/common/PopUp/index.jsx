import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeRedact } from '../../../store/slice/redactslice';
import { redactActive } from '../../../helper/dbFunction/redactActive';
import { addError } from '../../../store/slice/showError';

const PopUp = () => {
  const { isRedact, text, id } = useSelector((state) => state.redact);
  const dispatch = useDispatch();

  const [textForm, setTextForm] = useState('');

  useEffect(() => {
    setTextForm(text);
  }, [text]);

  const handlerChangeText = (e) => {
    setTextForm(e.target.value);
  };

  const exitPopUp = () => {
    dispatch(removeRedact());
  };

  return (
    <Dialog
      open={isRedact}
      fullWidth
    >
      <Box
        sx={{
          padding: `20px`,
        }}
      >
        <DialogActions>
          <IconButton onClick={exitPopUp}>
            <ClearIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle
          sx={{
            margin: '0px 0px 40px 0px',
            padding: 0,
          }}
        >
          Редактирование дела:
        </DialogTitle>
        <TextField
          autoFocus
          label="Редактирования"
          type="text"
          fullWidth
          value={textForm}
          onChange={handlerChangeText}
        />
        <DialogActions
          sx={{
            margin: `20px 0px`,
            padding: 0,
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              if (textForm) {
                redactActive(id, textForm, exitPopUp);
              } else {
                dispatch(addError({ text: 'Не указано дело, укажи дело' }));
              }
            }}
          >
            Изменить
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default PopUp;
