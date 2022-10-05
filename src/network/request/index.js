import axios from 'axios';

export const request = async ({ method = 'get', url = '/' }) => {
  try {
    const requestAxios = await axios({
      method,
      baseURL: 'https://jsonplaceholder.typicode.com/todos',
      url,
      timeout: 1000,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return requestAxios.data;
  } catch (e) {
    return [];
  }
};
