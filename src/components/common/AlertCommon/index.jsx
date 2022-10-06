import { Alert, Grid, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const AlertComponent = ({ showError, handleClose, setShowErrorFunc }) => {
  return (
    <>
      <Snackbar
        open={showError.isShow}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          width: `500px`,
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
                    setShowErrorFunc({});
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {showError.text}
            </Alert>
          </Grid>
        </Grid>
      </Snackbar>
    </>
  );
};

export default AlertComponent;
