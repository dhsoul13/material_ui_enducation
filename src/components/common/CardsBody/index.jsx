import { Grid } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllAction } from '../../../store/slice/showAllAction';
import CardElem from '../CardElem';
import CardElemWidthDate from '../CardElem/CardElemsWithDate';
import ExitAndInfo from '../ElemExitAndInfo';

const CardsBody = ({ data = [] }) => {
  const { isShowAllAction, date } = useSelector((state) => state.showAllAction);

  const dispath = useDispatch();

  const exitFromAllAction = () => {
    dispath(removeAllAction());
  };
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

          <ExitAndInfo
            text={'показать все дела за все время'}
            onClick={exitFromAllAction}
          />
        </>
      )}
    </Grid>
  );
};

export default CardsBody;
