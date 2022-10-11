import { Container, Typography } from '@mui/material';
import React from 'react';

const AuthComponentView = () => {
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
        }}
      >
        Авторизация
      </Typography>
    </Container>
  );
};

export default AuthComponentView;
