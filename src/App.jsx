import { Alert, AppBar, Button, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import MainContainer from './components/container/MainContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme({
  palette: {
    primary: {
      main: '#443B50',
      contrastText: '#fff',
    },
    castome: {
      light: '#CE7B86',
      main: '#805873',
      dark: '#473F66',
      contrastText: '#fff',
    },
    success: {
      main: '#4caf50',
    },
  },
});

const App = () => {
  const [showError, setShowError] = useState({
    isShow: false,
    text: '',
  });

  const setShowErrorFunc = ({ textAdd = '' }) => {
    if (showError.isShow) {
      setShowError({
        isShow: false,
        text: '',
      });
    } else {
      setShowError({
        isShow: true,
        text: textAdd,
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      {showError.isShow ? (
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              onClick={() => {
                setShowErrorFunc({});
              }}
            >
              {' '}
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {showError.text}
        </Alert>
      ) : (
        ''
      )}
      <MainContainer showError={setShowErrorFunc} />
    </ThemeProvider>
  );
};

export default App;
