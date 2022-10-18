import {
  Button,
  Card,
  CardActions,
  CardContent,
  createTheme,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { option } from '../../../helper/content';
import { changeComplit } from '../../../helper/dbFunction/changeComplite';
import { deleteFromBd } from '../../../helper/dbFunction/deleteAction';
import { useDispatch } from 'react-redux';
import { addRedact } from '../../../store/slice/redactslice';
import { changeMain } from '../../../helper/dbFunction/changeMain';
import { shadows } from '@mui/system';
import { changeColor } from '../../../helper/function';

const CardElem = ({ elem }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch();
  const handleClose = ({ el, elem }) => {
    if (el.id === 0) {
      changeMain(elem);
    }
    if (el.id === 1) {
      dispatch(addRedact({ text: elem.text, id: elem.id }));
    }
    if (el.id === 2) {
      deleteFromBd(elem);
    }
    setAnchorEl(null);
  };

  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: 'flex', flexGrow: 1 }}
    >
      <Card
        sx={(theme) => {
          return {
            padding: '20px',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            border: elem.isMain ? `2px solid  rgba(182, 25, 25, 0.2)` : '',
            background: elem.isMain ? `rgba(182, 25, 25, 0.1)` : '',
            boxShadow: `${
              elem.isMain ? '0px 0px 17px -2px rgba(182, 25, 25, 0.3)' : 3
            }`,
          };
        }}
      >
        <CardContent>
          <Typography variant="h5">{elem.text}</Typography>
          <Button
            variant="outlined"
            sx={{
              mt: `15px`,
            }}
            onClick={() => {
              changeComplit(elem);
            }}
            color={elem.completed ? 'success' : 'error'}
          >
            {elem.completed ? 'Выполнено' : 'Невыполнено'}
          </Button>
        </CardContent>
        <CardActions>
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {option.map((el, index) => (
              <MenuItem
                sx={{
                  padding: `20px`,
                }}
                key={index}
                onClick={() => {
                  handleClose({ el, elem });
                }}
              >
                {el.title}
              </MenuItem>
            ))}
          </Menu>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardElem;
