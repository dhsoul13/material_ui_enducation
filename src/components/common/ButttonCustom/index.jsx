import { Button } from '@mui/material';
import React from 'react';

const ButtonCustome = ({ title, type = 'button', state, onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        height: `100%`,
      }}
      fullWidth
      onClick={() => onClick(state)}
      type={type}
    >
      {title}
    </Button>
  );
};

export default ButtonCustome;
