import { CircularProgress } from '@mui/material';
import React from 'react';

const SpinerCustome = () => {
  return (
    <div
      style={{
        height: `100vh`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={100} />
    </div>
  );
};

export default SpinerCustome;
