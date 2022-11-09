import { Box, Container } from '@mui/system';
import React from 'react';
import AddComponent from '../../../common/AddComponent';
import CardsBody from '../../../common/CardsBody';
import { getDatabase, ref, set } from 'firebase/database';
import MenuFilter from '../../../common/MenuFilter';
import { Grid } from '@mui/material';
import PopUp from '../../../common/PopUp';
import { useDispatch, useSelector } from 'react-redux';
import ExitAndInfo from '../../../common/ElemExitAndInfo';
import { removeShowGraph } from '../../../../store/slice/graphslice';
import GraphPage from '../Graph';

const AuthView = ({ serchData }) => {
  const dispatch = useDispatch();
  const addFuctionBd = async ({ userId, content }) => {
    const db = getDatabase();
    set(ref(db, `users/${userId}/${Date.now()}`), {
      ...content,
    });
  };

  const { isShowGraph } = useSelector((state) => state.showGraph);

  const exitFromGraph = () => {
    dispatch(removeShowGraph());
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '50px 0px',
      }}
    >
      <Grid
        container
        rowSpacing={2}
        columnSpacing={5}
      >
        <Grid
          item
          xs={0}
        >
          {' '}
          <MenuFilter />
        </Grid>

        {isShowGraph ? (
          <>
            <GraphPage />
            <ExitAndInfo
              text="показать график активности"
              onClick={exitFromGraph}
            />
          </>
        ) : (
          <Grid
            item
            md={12}
            lg={11}
          >
            <Box
              sx={{
                mb: `30px`,
              }}
            >
              <AddComponent addFuctionBd={addFuctionBd} />
            </Box>
            <Box>
              <CardsBody dates={serchData} />
            </Box>
          </Grid>
        )}
      </Grid>

      <PopUp />
    </Container>
  );
};

export default AuthView;
