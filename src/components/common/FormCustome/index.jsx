import {
  Button,
  ButtonBase,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ButtonCustome from '../ButttonCustom';
import { useFormik } from 'formik';
import { CheckBox } from '@mui/icons-material';
import {
  validateSchemaAuth,
  validateSchemaReg,
} from '../../../helper/validate/validateForm';
import { useDispatch } from 'react-redux';
import { addError } from '../../../store/slice/showError';
import { concateErrorForOne, getErrorForObj } from '../../../helper/function';

const FormCustome = ({ onClick, type = 'auth' }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: type === 'auth' ? validateSchemaAuth : validateSchemaReg,

    onSubmit: async (values) => {
      await onClick(values.email, values.password);
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (Object.entries(formik.errors).length) {
      dispatch(addError({ text: formik.errors?.password }));
      if (Object.entries(formik.errors).length === 2) {
        dispatch(addError({ text: concateErrorForOne(formik.errors) }));
      } else {
        dispatch(addError({ text: getErrorForObj(formik.errors) }));
      }
    }
  }, [formik.errors]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid
          item
          xs={10}
        >
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.email)}
          />
        </Grid>
        <Grid
          item
          xs={10}
        >
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Пароль"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.password)}
          />
        </Grid>
        <Grid
          xs={10}
          item
          sx={{
            alignItems: 'right',
          }}
        >
          <FormGroup
            sx={{
              alignItems: 'flex-end',
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              }
              label="Показать пароль"
            />
          </FormGroup>
        </Grid>
        <Grid
          item
          xs={10}
          height={'65px'}
        >
          {/* <ButtonCustome
            onClick={() => {}}
            title={'Отправить'}
            type={'sumbit'}
          /> */}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              height: `50px`,
            }}
          >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormCustome;
