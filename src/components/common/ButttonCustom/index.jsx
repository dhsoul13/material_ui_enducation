import { Button, styled } from '@mui/material';
import React from 'react';
import { checkStyleInObject } from '../../../helper/function';

const ButtonCustome = ({
  title,
  type = 'button',
  state,
  onClick,
  style = {},
}) => {
  const CustomeButtonStyle = styled(Button)(({ theme }) => ({
    background: checkStyleInObject(style, 'background')
      ? checkStyleInObject(style, 'background')
      : '',
    color: checkStyleInObject(style, 'color')
      ? checkStyleInObject(style, 'color')
      : '',
    border: checkStyleInObject(style, 'border')
      ? checkStyleInObject(style, 'border')
      : '',

    '&': {
      '&:hover': {
        color: checkStyleInObject(style, 'colorHover')
          ? checkStyleInObject(style, 'colorHover')
          : '',
        background: checkStyleInObject(style, 'backgroundHover')
          ? checkStyleInObject(style, 'backgroundHover')
          : '',

        border: checkStyleInObject(style, 'borderHover')
          ? checkStyleInObject(style, 'borderHover')
          : '',
      },
    },
  }));

  console.log(checkStyleInObject(style, 'background'));

  return (
    <CustomeButtonStyle
      fullWidth
      onClick={() => onClick(state)}
      type={type}
      variant="contained"
      sx={{
        height: '100%',
      }}
    >
      {title}
    </CustomeButtonStyle>
  );
};

export default ButtonCustome;
