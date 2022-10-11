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
import { useState } from 'react';
import AlertError from './components/common/AlertError';
import AlertInfo from './components/common/AlertInfo';

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
  return (
    <ThemeProvider theme={theme}>
      <AlertError />
      <MainContainer />
      <AlertInfo />
    </ThemeProvider>
  );
};

export default App;
