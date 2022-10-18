import { Container } from '@mui/system';
import MainContainer from './components/container/MainContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import AlertError from './components/common/AlertError';
import AlertInfo from './components/common/AlertInfo';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addAuth } from './store/slice/isAuthSlice';
import SpinerCustome from './components/common/SpinerCustom';
import {
  getDatabase,
  onValue,
  ref,
  orderByValue,
  query,
  orderByChild,
} from 'firebase/database';
import { addData } from './store/slice/dataslice';
import { sortDate } from './helper/function';

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
  const [showContent, setShowContent] = useState(true);
  const dispatch = useDispatch();
  const stateChangeAuth = async () => {
    try {
      setShowContent(false);
      const auth = getAuth();
      const db = getDatabase();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(addAuth({ user }));
          console.log(user.uid);
          const starCountRef = query(ref(db, `users/${user.uid}`));
          onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            dispatch(addData(sortDate(data)));
            setShowContent(true);
          });
        } else {
          setShowContent(true);
        }
      });
    } catch (e) {
      setShowContent(true);
      console.error(e);
    }
  };

  useEffect(() => {
    stateChangeAuth();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AlertError />
      {showContent ? <MainContainer /> : <SpinerCustome />}

      <AlertInfo />
    </ThemeProvider>
  );
};

export default App;
