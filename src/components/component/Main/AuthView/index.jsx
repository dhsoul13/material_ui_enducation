import { Box, Container } from '@mui/system';
import React from 'react';
import AddComponent from '../../../common/AddComponent';
import CardsBody from '../../../common/CardsBody';

const AuthView = ({ serchData }) => {
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
            <AddComponent />
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
