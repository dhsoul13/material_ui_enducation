import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  createTheme,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CardElem from '..';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { option } from '../../../helper/content';
// import { changeComplit } from '../../../helper/dbFunction/changeComplite';
// import { deleteFromBd } from '../../../helper/dbFunction/deleteAction';
// import { useDispatch } from 'react-redux';
// import { addRedact } from '../../../store/slice/redactslice';
// import { changeMain } from '../../../helper/dbFunction/changeMain';
// import { shadows } from '@mui/system';
// import { changeColor } from '../../../helper/function';

const CardElemWidthDate = ({ elem }) => {
  console.log(2, elem);
  return (
    <Grid
      item
      xs={12}
    >
      <Typography
        sx={{
          mb: `20px`,
        }}
        variant="h5"
      >
        Дата: {elem.day}/{elem.month}/{elem.year}
      </Typography>
      <Grid
        container
        md={12}
        xs={12}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={{
          xs: 0,
          md: 2,
        }}
      >
        {elem.elems.map((el) => (
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              width: `100%`,
            }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6">{el.text}</Typography>
                <Button
                  sx={{
                    mt: `15px`,
                    fontSize: {
                      xs: '10px',
                    },
                  }}
                  variant="outlined"
                  color={el.completed ? 'success' : 'error'}
                >
                  {el.completed ? 'Выполнен' : 'Не выполнен'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CardElemWidthDate;
