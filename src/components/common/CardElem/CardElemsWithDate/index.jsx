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
import Calendar from 'react-calendar';
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
  return <>2</>;
};

export default CardElemWidthDate;

// {elem.map((el) => (
//   <Grid
//     item
//     md={4}
//     xs={12}
//     sx={{
//       width: `100%`,
//     }}
//   >
//     <Card>
//       <CardContent>
//         <Typography variant="h6">{el.text}</Typography>
//         <Button
//           sx={{
//             mt: `15px`,
//             fontSize: {
//               xs: '10px',
//             },
//           }}
//           variant="outlined"
//           color={el.completed ? 'success' : 'error'}
//         >
//           {el.completed ? 'Выполнен' : 'Не выполнен'}
//         </Button>
//       </CardContent>
//     </Card>
//   </Grid>
// ))}
