import {
  Alert,
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  Snackbar,
} from '@mui/material';
import { Container } from '@mui/system';
import MainContainer from './components/container/MainContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import AlertError from './components/common/AlertError';
import AlertInfo from './components/common/AlertInfo';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addAuth } from './store/slice/isAuthSlice';

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
  const dispatch = useDispatch();
  const stateChangeAuth = async () => {
    try {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(addAuth({ user }));
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    stateChangeAuth();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AlertError />
      <MainContainer />
      <AlertInfo />
    </ThemeProvider>
  );
};

export default App;
