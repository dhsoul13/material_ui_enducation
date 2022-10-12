import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SpinerCustomeHidden = () => {
  return (
    <Box
      sx={{
        height: `100%`,
        width: `100%`,
        position: 'absolute',
        background: 'rgba(255, 255, 255, 0.90);',
        zIndex: 100,
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
};

export default SpinerCustomeHidden;
