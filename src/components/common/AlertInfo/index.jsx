import { Alert, Button, Snackbar } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { returnData } from '../../../store/slice/dataslice';
import { removeSearch } from '../../../store/slice/searchslice';

const AlertInfo = () => {
  const dispatch = useDispatch();

  const { isShow, text } = useSelector((state) => state.search);

  const handlerDataReturn = () => {
    dispatch(removeSearch());
    dispatch(returnData());
  };
  return (
    <>
      <Snackbar open={isShow}>
        <Alert
          severity="info"
          action={<Button onClick={handlerDataReturn}>Вернуть</Button>}
        >
          Введено: {text}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertInfo;
