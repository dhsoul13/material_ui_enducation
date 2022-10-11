import { Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import FormCustome from '../../../common/FormCustome';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../../../store/slice/isAuthSlice';
import { addError } from '../../../../store/slice/showError';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const RegComponentView = ({ onClick, state }) => {
  const dispatch = useDispatch();
  const RegFunction = async (email, password) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          dispatch(addAuth({ user: user.user }));
        })
        .catch((error) => {
          dispatch(addError({ text: `${error.message}` }));
          throw error.code;
        });
    } catch (e) {
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
        Регистрация
      </Typography>

      <Grid>
        <FormCustome onClick={RegFunction} />
      </Grid>
    </Container>
  );
};

export default RegComponentView;
