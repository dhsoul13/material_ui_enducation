import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const GraphPage = () => {
  const data = useSelector((state) => state.showGraph);

  console.log(data);
  return <Grid item>GraphPage</Grid>;
};

export default GraphPage;
