import { createSlice } from '@reduxjs/toolkit';

const searchSlide = createSlice({
  name: 'search',
  initialState: {
    isShow: false,
    text: '',
  },

  reducers: {
    addSearch(state, action) {
      state.isShow = true;
      state.text = action.text;
    },
    removeSearch(state) {
      state.isShow = false;
      state.text = '';
    },
  },
});

export const { addSearch, removeSearch } = searchSlide.actions;

export default searchSlide.reducer;
