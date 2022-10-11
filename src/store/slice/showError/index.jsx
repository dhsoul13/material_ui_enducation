import { createSlice } from '@reduxjs/toolkit';

const errorSlide = createSlice({
  name: 'search',
  initialState: {
    isShow: false,
    text: '',
  },

  reducers: {
    addError(state, action) {
      state.isShow = true;
      state.text = action.payload.text;
    },
    removeError(state) {
      state.isShow = false;
      state.text = '';
    },
  },
});

export const { addError, removeError } = errorSlide.actions;

export default errorSlide.reducer;
