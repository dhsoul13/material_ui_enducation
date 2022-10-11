import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { option } from '../../../helper/content';
import { deleteFun } from '../../../helper/function';
import { useSelector } from 'react-redux';

const CardElem = ({ elem }) => {
  // const [open, setOpen] = useState(true);
  const { data } = useSelector((state) => state.data);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = ({ el, elem }) => {
    if (el.id === 2) {
      deleteFun({
        el,
        data,
        elem,
      });
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
        sx={{
          padding: '20px',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <CardContent>
          <Typography variant="h5">{elem.title}</Typography>
          <Button
            variant="outlined"
            sx={{
              mt: `15px`,
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
            {option.map((el) => (
              <MenuItem
                sx={{
                  padding: `20px`,
                }}
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
