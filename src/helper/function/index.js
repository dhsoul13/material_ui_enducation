import { request } from '../../network/request';
import { addData, serchData } from '../../store/slice/dataslice';
import { addError } from '../../store/slice/showError';

export const req = async (dispath) => {
  const datas = await request({ url: '?userId=1' });
  dispath(addData(datas));
};

export const serchHandlerClick = ({ text, dispath, data }) => {
  const result = data.filter((el) => el.title.includes(text));
  if (result.length) {
    dispath(serchData(result));
    return true;
  } else {
    dispath(addError({ text: 'Нет данных' }));
    return false;
  }
};

export const deleteFun = ({ el, data, elem }) => {
  console.log({ el, data, elem });

  const result = data.find((elememt) =>
    elememt.id === elem.id ? true : false
  );

  console.log('result', {
    result,
  });
};

export const checkStyleInObject = (obj, key) => {
  return Object.entries(obj).find((el) => el[0] === key)
    ? Object.entries(obj).find((el) => el[0] === key)[1]
    : false;
};

export const concateErrorForOne = (errors) => {
  return Object.entries(errors)
    .map((el) => el[1])
    .join('. ');
};

export const getErrorForObj = (error) => {
  return Object.entries(error).map((el) => el[1])[0];
};
