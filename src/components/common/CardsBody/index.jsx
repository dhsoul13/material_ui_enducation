import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromDate } from '../../../helper/function';
import { removeAllAction } from '../../../store/slice/showAllAction';
import CalendarCustom from '../../component/Main/CalendarCustom';
import CardElem from '../CardElem';
import CardElemWidthDate from '../CardElem/CardElemsWithDate';
import ExitAndInfo from '../ElemExitAndInfo';

const CardsBody = ({ dates = [] }) => {
  const { isShowAllAction, date, data } = useSelector(
    (state) => state.showAllAction
  );
  const [value, onChange] = useState(new Date());
  const [viewElem, setViewElem] = useState([]);
  console.log({ dates });
  const dispath = useDispatch();

  useEffect(() => {
    setViewElem(getDataFromDate({ data, date: value }));
  }, [data, value]);
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
        dates.map((el, index) => (
          <CardElem
            elem={el}
            key={index}
          />
        ))
      ) : (
        <>
          {/* {date.map((el) => (
            <>
              <CardElemWidthDate elem={el} />
            </>
          ))}

          <ExitAndInfo
            text={'показать все дела за все время'}
            onClick={exitFromAllAction}
          /> */}

          <Grid item>
            <Grid>
              <CalendarCustom
                value={value}
                onChange={onChange}
                defaultValue={date}
              />
            </Grid>
            <Grid>
              {value.toLocaleString('ru', {
                day: 'numeric',
                year: 'numeric',
                month: 'long',
              })}
            </Grid>
          </Grid>

          <Grid item>
            {viewElem.map((el) => (
              <>
                <CardElemWidthDate elem={el} />
              </>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default CardsBody;
