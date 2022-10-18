import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CardElem from '../CardElem';
import CardElemWidthDate from '../CardElem/CardElemsWithDate';

const CardsBody = ({ data = [] }) => {
  const { isShowAllAction, date } = useSelector((state) => state.showAllAction);

  console.log(isShowAllAction);
  return (
    <Grid
      container
      spacing={5}
      direction="row"
    >
      {!isShowAllAction ? (
        data.map((el, index) => (
          <CardElem
            elem={el}
            key={index}
          />
        ))
      ) : (
        <>
          {date.map((el) => (
            <>
              <CardElemWidthDate elem={el} />
            </>
          ))}
        </>
      )}
    </Grid>
  );
};

export default CardsBody;
