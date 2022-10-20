import { Alert, Button, Snackbar } from '@mui/material';
import React from 'react';

const ExitAndInfo = ({ onClick = () => {}, text = '' }) => {
  return (
    <Snackbar
      open={true}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{
        mt: '50px',
      }}
    >
      <Alert
        severity="info"
        action={
          <Button
            variant="text"
            size="small"
            onClick={onClick}
          >
            Ввернуть
          </Button>
        }
      >
        Выбрано: {text}
      </Alert>
    </Snackbar>
  );
};

export default ExitAndInfo;
