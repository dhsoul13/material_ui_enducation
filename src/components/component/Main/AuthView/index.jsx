import { Box, Container } from '@mui/system';
import React from 'react';
import AddComponent from '../../../common/AddComponent';
import CardsBody from '../../../common/CardsBody';
import { getDatabase, ref, set } from 'firebase/database';

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
      <Box>
        <Box>
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
        </Box>
      </Box>
    </Container>
  );
};

export default AuthView;
