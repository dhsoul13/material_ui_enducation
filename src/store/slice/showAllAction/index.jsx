import { createSlice } from '@reduxjs/toolkit';

const showAllAction = createSlice({
  name: 'search',
  initialState: {
    isShowAllAction: false,
    data: [],
    date: [],
  },

  reducers: {
    addAllAction(state, action) {
      state.isShowAllAction = true;
      state.date = action.payload.date;
      state.data = action.payload.data;
    },
    removeAllAction(state) {
      state.isShowAllAction = false;
      state.date = [];
      state.data = [];
    },
  },
});

export const { addAllAction, removeAllAction } = showAllAction.actions;

export default showAllAction.reducer;
