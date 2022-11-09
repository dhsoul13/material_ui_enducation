/* eslint-disable default-case */
import { request } from '../../network/request';
import { addData, serchData } from '../../store/slice/dataslice';
import { addError } from '../../store/slice/showError';
import { getAllAction } from '../dbFunction/getAllAction';
import moment from 'moment';

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

export const concatObject = (obj) => {
  // delete obj.id;
  // return obj.filter((el) => el);
  const newObj = { ...obj };
  delete newObj.id;
  return newObj;
};

export const changeColor = (shadow, color) => {
  console.log({
    shadow,
    result: shadow
      .split(' ')
      .map((el) => (el.includes('rgb') ? color : el))
      .join(' '),
  });

  return shadow
    .split(' ')
    .map((el) => (el.includes('rgb') ? color : el))
    .join(' ');
};

export const sortDate = (data) => {
  if (data && Object.entries(data).length) {
    const mas = Object.entries(data).map((el) => {
      return {
        id: el[0],
        ...el[1],
      };
    });

    const nowDay = new Date().getDate();
    const nowMonth = new Date().getMonth();
    console.log({
      nowDay,
      nowMonth,
    });
    return mas
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .sort((a, b) => -Number(Boolean(a.isMain)) + Number(Boolean(b.isMain)))
      .filter((el) => {
        return (
          new Date(el.date).getDate() === nowDay &&
          new Date(el.date).getMonth() === nowMonth
        );
      });
  } else {
    return [];
  }
};

/// switch for menu

export const typeFunctionForMenu = (x, data) => {
  switch (x) {
    case '0': {
      getAllAction(data);
      break;
    }
    case '1': {
      getAllAction(data);
      break;
    }
  }
};

/// mark

export const markForm = (dates) => {
  try {
    return dates.map((el) => moment(el).format('DD-MM-YYYY'));
  } catch (e) {
    console.log(e);
    return [];
  }
};

/// getDataFromDate

export const getDataFromDate = ({ data, date }) => {
  try {
    return data.filter(
      (el) => new Date(el.date).toDateString() === new Date(date).toDateString()
    );
  } catch (e) {
    console.log(e);
    return [];
  }
};
