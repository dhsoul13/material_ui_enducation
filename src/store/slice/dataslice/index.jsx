import { createSlice } from '@reduxjs/toolkit';

const dataSlide = createSlice({
  name: 'data',
  initialState: {
    isShow: false,
    data: [],
    serchData: [],
  },

  reducers: {
    addData(state, action) {
      state.isShow = true;
      state.data = action.payload;
      state.serchData = action.payload;
    },
    serchData(state, action) {
      state.isShow = true;
      state.data = state.data;
      state.serchData = action.payload;
    },
    returnData(state) {
      state.isShow = true;
      state.data = state.data;
      state.serchData = state.data;
    },
  },
});

export const { addData, serchData, returnData } = dataSlide.actions;

export default dataSlide.reducer;
