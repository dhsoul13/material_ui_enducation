import { Box, Button, Container, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddComponent from '../../common/AddComponent';
import CardsBody from '../../common/CardsBody';
import HeaderCommon from '../../common/Header';
import SerchCommon from '../../common/Serch';
import AuthComponentView from '../../component/Main/Auth';
import AuthView from '../../component/Main/AuthView';
import NotAuthView from '../../component/Main/NotAuthView';

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const handlerOpen = () => {
    setOpen(!open);
  };

  const { serchData } = useSelector((state) => state.data);

  return (
    <>
      <HeaderCommon onClick={handlerOpen} />

      {/* <AuthView serchData={serchData} /> */}
      {/* 
      <NotAuthView /> */}

      <AuthComponentView />

      <SerchCommon
        onClick={handlerOpen}
        state={open}
      />
    </>
  );
};

export default MainPage;
