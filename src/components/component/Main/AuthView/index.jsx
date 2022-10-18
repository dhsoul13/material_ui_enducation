import { Box, Container } from '@mui/system';
import React from 'react';
import AddComponent from '../../../common/AddComponent';
import CardsBody from '../../../common/CardsBody';
import { getDatabase, ref, set } from 'firebase/database';
import MenuFilter from '../../../common/MenuFilter';
import { Grid } from '@mui/material';
import PopUp from '../../../common/PopUp';

const AuthView = ({ serchData }) => {
  const addFuctionBd = async ({ userId, content }) => {
    const db = getDatabase();
    set(ref(db, `users/${userId}/${Date.now()}`), {
      ...content,
    });
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '50px 0px',
      }}
    >
      <Grid
        container
        rowSpacing={2}
        columnSpacing={5}
      >
        <Grid
          item
          xs={0}
        >
          {' '}
          <MenuFilter />
        </Grid>
        <Grid
          item
          md={12}
          lg={11}
        >
          <Box
            sx={{
              mb: `30px`,
            }}
          >
            <AddComponent addFuctionBd={addFuctionBd} />
          </Box>
          <Box>
            <CardsBody data={serchData} />
          </Box>
        </Grid>
      </Grid>

      <PopUp />
    </Container>
  );
};

export default AuthView;
