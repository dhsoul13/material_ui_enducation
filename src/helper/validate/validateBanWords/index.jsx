import { words } from './banRows';

export const validateBanWords = (text) => {
  let findBanWord = false;
  const result = text
    .split(/([.,:!]\s)|(\s)|([.,:!])/gm)
    .filter((el) => el)
    .map((el) => {
      if (words.find((elem) => elem.word === el)) {
        findBanWord = true;
        return new Array(el.length).fill('*').join('');
      } else {
        return el;
      }
    })
    .join('');

  return {
    text: result,
    findBanWord,
  };
};
