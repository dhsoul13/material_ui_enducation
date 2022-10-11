import { Box, Button, Container, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddComponent from '../../common/AddComponent';
import CardsBody from '../../common/CardsBody';
import HeaderCommon from '../../common/Header';
import SerchCommon from '../../common/Serch';

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const handlerOpen = () => {
    setOpen(!open);
  };

  const { serchData } = useSelector((state) => state.data);

  return (
    <>
      <HeaderCommon onClick={handlerOpen} />
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

      <SerchCommon
        onClick={handlerOpen}
        state={open}
      />
    </>
  );
};

export default MainPage;
