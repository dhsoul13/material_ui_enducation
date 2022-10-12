import { Container, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import FormCustome from '../../../common/FormCustome';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../../../store/slice/isAuthSlice';
import { addError } from '../../../../store/slice/showError';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SpinerCustomeHidden from '../../../common/SpinerCustom/SpinerCustomeHidden';

const AuthComponentView = ({ onClick, state }) => {
  const dispatch = useDispatch();
  const [showSpiner, setShowSpiner] = useState(false);
  const authFunction = async (email, password) => {
    try {
      setShowSpiner(true);
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          dispatch(addAuth({ user: user.user }));
          setShowSpiner(false);
        })
        .catch((error) => {
          setShowSpiner(false);
          dispatch(addError({ text: `${error.message}` }));
          throw error.code;
        });
    } catch (e) {
      setShowSpiner(false);
      console.error(e);
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '50px 0px',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        mt: 100,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          margin: '30px 0px',

          fontSize: {
            xs: '20px',
            sm: '35px',
          },
        }}
      >
        {
          <IconButton
            onClick={() => {
              onClick(state);
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        }
        Авторизация
      </Typography>

      <Grid
        sx={{
          width: 'calc(min(700px, 90%))',
        }}
        container
      >
        <FormCustome onClick={authFunction} />
      </Grid>

      {showSpiner ? <SpinerCustomeHidden /> : ''}
    </Container>
  );
};

export default AuthComponentView;
