import React, { useEffect, useState } from 'react';
import { request } from '../../../network/request';
import MainPage from '../../page/MainPage';

const MainContainer = () => {
  const [data, setData] = useState([]);

  const req = async () => {
    const datas = await request({ url: '?userId=1' });
    setData(datas);
  };

  useEffect(() => {
    req();
  }, []);

  const serchHandlerClick = (text) => {
    const result = data.filter((el) => el.title.includes(text));
    if (result.length) {
      setData(result);
    } else {
      alert('Ничего не найдено');
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
