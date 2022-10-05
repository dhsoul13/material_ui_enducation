import React from 'react';
import { Box, Drawer } from '@mui/material';
const SerchCommon = ({ onClick, state }) => {
  return (
    <>
      <Drawer
        anchor="top"
        open={state}
      >
        <Box
          sx={{
            padding: 10,
          }}
        ></Box>
      </Drawer>
    </>
  );
};

export default SerchCommon;
