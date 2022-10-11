import { createSlice } from '@reduxjs/toolkit';

const isAuthSlice = createSlice({
  name: 'search',
  initialState: {
    isShow: false,
    info: {},
  },

  reducers: {
    addAuth(state, action) {
      state.isShow = true;
      state.info = action.payload.user;
    },
    removeAuth(state) {
      state.isShow = false;
      state.info = {};
    },
  },
});

export const { addAuth, removeAuth } = isAuthSlice.actions;

export default isAuthSlice.reducer;
