import { Alert, Grid, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeError } from '../../../store/slice/showError';

const AlertError = () => {
  const dispatch = useDispatch();
  const { isShow, text } = useSelector((state) => state.error);

  const closeErrorAlert = () => {
    dispatch(removeError());
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(removeError());
  };
  return (
    <>
      <Snackbar
        open={isShow}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          width: {
            sm: `100`,
            xl: `500px`,
          },
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
          >
            <Alert
              severity="error"
              sx={{
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
              }}
              action={
                <IconButton
                  aria-label="close"
                  onClick={() => {
                    closeErrorAlert();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {text}
            </Alert>
          </Grid>
        </Grid>
      </Snackbar>
    </>
  );
};

export default AlertError;
