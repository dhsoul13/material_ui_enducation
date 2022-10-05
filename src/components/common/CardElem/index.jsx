import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const styles = ({ theme }) => ({
  primary: {
    '&:hover': {
      color: '#fff',
    },
  },
});

const CardElem = ({ elem }) => {
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
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography variant="h5">{elem.title}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color={elem.completed ? 'success' : 'error'}
          >
            {elem.completed ? 'Выполнено' : 'Невыполнено'}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardElem;
