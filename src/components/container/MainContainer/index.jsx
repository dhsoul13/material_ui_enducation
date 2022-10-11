import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { req } from '../../../helper/function';
import { request } from '../../../network/request';
import { addSearch } from '../../../store/slice/searchslice';
import { addData } from '../../../store/slice/dataslice';
import MainPage from '../../page/MainPage';

const MainContainer = () => {
  const dispath = useDispatch();

  useEffect(() => {
    req(dispath);
  }, []);

  return (
    <>
      <MainPage />
    </>
  );
};

export default React.memo(MainContainer);
