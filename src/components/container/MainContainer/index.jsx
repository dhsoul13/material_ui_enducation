import React, { useEffect, useState } from 'react';
import { request } from '../../../network/request';
import MainPage from '../../page/MainPage';

const MainContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const req = async () => {
      const datas = await request({ url: '?userId=1' });
      setData(datas);
    };
    req();
  }, []);

  return (
    <>
      <MainPage data={data ? data : []} />
    </>
  );
};

export default React.memo(MainContainer);
