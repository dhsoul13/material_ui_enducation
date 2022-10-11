import { Button } from '@mui/material';
import React from 'react';

const ButtonCustome = ({ title }) => {
  return (
    <Button
      variant="contained"
      sx={{
        height: `100%`,
      }}
    >
      {title}
    </Button>
  );
};

export default ButtonCustome;
