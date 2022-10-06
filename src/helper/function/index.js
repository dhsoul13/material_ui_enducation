import { request } from '../../network/request';

export const req = async ({ setData }) => {
  const datas = await request({ url: '?userId=1' });
  setData(datas);
};
