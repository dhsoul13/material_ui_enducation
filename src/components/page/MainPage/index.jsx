import { Box, Container, Drawer } from '@mui/material';
import React, { useState } from 'react';
import AddComponent from '../../common/AddComponent';
import CardsBody from '../../common/CardsBody';
import HeaderCommon from '../../common/Header';
import SerchCommon from '../../common/Serch';

const MainPage = ({ data = [], search }) => {
  const [open, setOpen] = useState(false);
  const [searchText, setSerch] = useState('');

  const handlerOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <HeaderCommon onClick={handlerOpen} />
      <Container
        maxWidth="lg"
        sx={{
          padding: '50px 0px',
        }}
      >
        <Box
          sx={{
            mb: `30px`,
          }}
        >
          <AddComponent />
        </Box>

        <Box>
          <CardsBody data={data} />
        </Box>
      </Container>

      <SerchCommon
        onClick={handlerOpen}
        state={open}
        setSerch={setSerch}
        search={search}
        searchText={searchText}
      />
    </>
  );
};

export default MainPage;
