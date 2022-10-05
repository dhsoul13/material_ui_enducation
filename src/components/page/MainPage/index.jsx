import { Container } from '@mui/material';
import React from 'react';
import AddComponent from '../../common/AddComponent';
import HeaderCommon from '../../common/Header';

const MainPage = () => {
  return (
    <>
      <HeaderCommon />
      <Container
        sx={{
          mt: '20px',
        }}
      >
        <AddComponent />
      </Container>
    </>
  );
};

export default MainPage;
