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
import RegComponentView from '../../component/Main/Registration';

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const [typeAction, setTypeAction] = useState(0);

  const handlerOpen = () => {
    setOpen(!open);
  };

  const handlerClickTypeAction = (type) => {
    setTypeAction(type);
  };

  const { isShow } = useSelector((state) => state.auth);

  const { serchData } = useSelector((state) => state.data);

  console.log(serchData);
  return (
    <>
      <HeaderCommon onClick={handlerOpen} />
      <Box
        sx={{
          mt: `80px`,
        }}
      >
        {isShow ? (
          <AuthView serchData={serchData} />
        ) : typeAction === 0 ? (
          <NotAuthView setTypeAction={handlerClickTypeAction} />
        ) : typeAction === 1 ? (
          <AuthComponentView
            onClick={handlerClickTypeAction}
            state={0}
          />
        ) : (
          <RegComponentView
            onClick={handlerClickTypeAction}
            state={0}
          />
        )}
      </Box>
      {/* <AuthView serchData={serchData} /> */}

      {isShow ? (
        <SerchCommon
          onClick={handlerOpen}
          state={open}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default MainPage;
