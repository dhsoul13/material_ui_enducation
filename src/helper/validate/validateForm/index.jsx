import * as Yup from 'yup';

export const validateSchemaAuth = Yup.object().shape({
  email: Yup.string('Введите Email')
    .email('Введите правильный email')
    .required('Email обЪязательный'),
  password: Yup.string('Введите пароль')
    .min(8, 'Пароль должен быть больше 8')
    .required('Пароль обЪязательный'),
});

export const validateSchemaReg = Yup.object().shape({
  email: Yup.string('Введите Email')
    .email('Введите правильный email')
    .required('Email обЪязательный'),
});
