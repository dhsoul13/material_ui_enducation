import { createSlice } from '@reduxjs/toolkit';

const showAllAction = createSlice({
  name: 'search',
  initialState: {
    isShowAllAction: false,
    date: '',
  },

  reducers: {
    addAllAction(state, action) {
      state.isShowAllAction = true;
      state.date = action.payload;
    },
    removeAllAction(state) {
      state.isShowAllAction = false;
      state.date = [];
    },
  },
});

export const { addAllAction, removeAllAction } = showAllAction.actions;

export default showAllAction.reducer;
