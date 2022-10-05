import { Grid } from '@mui/material';
import React from 'react';
import CardElem from '../CardElem';

const CardsBody = ({ data = [] }) => {
  return (
    <Grid
      container
      spacing={5}
      direction="row"
    >
      {data.map((el) => (
        <CardElem
          elem={el}
          key={el.id}
        />
      ))}
    </Grid>
  );
};

export default CardsBody;
