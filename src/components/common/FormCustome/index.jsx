import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import ButtonCustome from '../ButttonCustom';
import { useFormik } from 'formik';
import { CheckBox } from '@mui/icons-material';

const FormCustome = ({ onClick }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(await onClick(values.email, values.password));
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          padding: `10px`,
        }}
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
          <ButtonCustome
            title={'Отправить'}
            type={'sumbit'}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default FormCustome;
