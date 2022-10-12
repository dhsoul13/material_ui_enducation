import * as yup from 'yup';

export const validateSchemaAuth = yup.object().shape({
  email: yup
    .string('Введите Email')
    .email('Введите правильный email')
    .required('Email обЪязательный'),
  password: yup
    .string('Введите пароль')
    .min(8, 'Пароль должен быть больше 8')
    .required('Пароль обЪязательный'),
});
