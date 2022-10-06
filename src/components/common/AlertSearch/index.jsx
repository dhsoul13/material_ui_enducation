import { Alert, Button, Snackbar } from '@mui/material';
import React from 'react';

const AlertSearch = () => {
  return (
    <>
      <Snackbar open={true}>
        <Alert
          severity="info"
          action={<Button>Вернуть</Button>}
        >
          Введено:
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertSearch;
