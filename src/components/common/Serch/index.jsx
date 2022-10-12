import React, { useState } from 'react';
import { Box, Button, Drawer, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from '../../../store/slice/searchslice';
import { serchHandlerClick } from '../../../helper/function';
import { serchData } from '../../../store/slice/dataslice';
import { addError } from '../../../store/slice/showError';
const SerchCommon = ({ onClick, state }) => {
  const [text, setText] = useState();
  const dispath = useDispatch();
  const { data } = useSelector((state) => state.data);

  return (
    <>
      <Drawer
        anchor="top"
        open={state}
      >
        <Grid
          columnSpacing={10}
          container
          spacing={2}
          sx={{
            padding: '50px',
          }}
        >
          <Grid
            item
            xs={12}
            md={10}
          >
            <TextField
              fullWidth
              label="Поиск"
              id="search"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <Button
              onClick={() => {
                const result = serchHandlerClick({
                  text: text,
                  dispath,
                  data: data,
                });
                if (result) {
                  dispath(addSearch({ text: text }));
                } else {
                  dispath(addError({ text: 'Не найдено' }));
                }

                onClick();
              }}
              variant="contained"
              sx={{
                height: `100%`,
              }}
              fullWidth
            >
              Найти
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default SerchCommon;
