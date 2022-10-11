import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ButtonCustome from '../../../common/ButttonCustom';

const NotAuthView = () => {
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
      <Box
        sx={{
          maxWidth: 'calc(min(500px, 90%))',
          mb: '50px',
        }}
      >
        <Typography
          textAlign={'center'}
          variant="h5"
          mt={`100px`}
          sx={{}}
        >
          Привет, тут ты можешь записывать свои дела, ну что заходи,записывай,
          не забывай, а выполняй!!
        </Typography>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={10}
      >
        <Grid
          item
          height={130}
        >
          <ButtonCustome title={'Авторизация'} />
        </Grid>
        <Grid
          item
          height={130}
        >
          <ButtonCustome title={'Регистрация'} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotAuthView;
