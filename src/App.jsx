import { Alert, AppBar, Button, IconButton, Snackbar } from '@mui/material';
import { Container } from '@mui/system';
import MainContainer from './components/container/MainContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import AlertComponent from './components/common/AlertCommon';
import AlertSearch from './components/common/AlertSearch';

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

  const [showContent, setShowContent] = useState({
    isOpen: false,
    text: 'text',
  });

  const setShowErrorFunc = ({ textAdd = '' }) => {
    alert(textAdd);
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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowError({
      isShow: false,
      text: '',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <AlertComponent
        showError={showError}
        handleClose={handleClose}
        setShowErrorFunc={setShowErrorFunc}
      />
      <MainContainer showError={setShowErrorFunc} />
      <AlertSearch />
    </ThemeProvider>
  );
};

export default App;
