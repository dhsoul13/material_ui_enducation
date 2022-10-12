import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ButtonCustome from '../../../common/ButttonCustom';

const NotAuthView = ({ setTypeAction }) => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '80vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            backgroundColor: 'primary.main',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            border: `1px solid`,
            padding: `50px 30px`,
            height: 'calc(min(500px, 90%))',
            width: 'calc(min(700px, 90%))',
            borderRadius: '30px',
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
              sx={{
                color: 'primary.contrastText',
                fontWeight: 500,
                fontSize: `28px`,
              }}
            >
              Привет, тут ты можешь записывать свои дела, ну что
              заходи,записывай, не забывай, а выполняй!!
            </Typography>
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid
              item
              sx={{
                height: '90px',
              }}
              xs={4}
            >
              <ButtonCustome
                title={'Авторизация'}
                onClick={setTypeAction}
                state={1}
                style={{
                  color: '#23221F',
                  background: '#F2E4BF',
                  backgroundHover: '#9D8662',
                  colorHover: '#FFF',
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                height: '90px',
              }}
            >
              <ButtonCustome
                title={'Регистрация'}
                onClick={setTypeAction}
                state={2}
                style={{
                  color: '#FFF',
                  background: '#9D8662',
                  backgroundHover: '#EDD9A4',
                  colorHover: '#23221F',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default NotAuthView;
