import React, { useEffect, useState } from 'react';
import { req } from '../../../helper/function';
import { request } from '../../../network/request';
import MainPage from '../../page/MainPage';

const MainContainer = ({ showError }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    req({ setData: setData });
  }, []);

  const serchHandlerClick = async (text) => {
    const result = data.filter((el) => el.title.includes(text));
    if (result.length) {
      setData(result);
    } else {
      await req({ setData: setData });
      showError({ textAdd: 'Ничего не найдено' });
    }
  };
  return (
    <>
      <MainPage
        data={data ? data : []}
        search={serchHandlerClick}
      />
    </>
  );
};

export default React.memo(MainContainer);
