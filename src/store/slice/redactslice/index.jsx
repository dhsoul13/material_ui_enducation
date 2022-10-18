import { createSlice } from '@reduxjs/toolkit';

const redactSlice = createSlice({
  name: 'redact',
  initialState: {
    isRedact: false,
    text: '',
    id: '',
  },

  reducers: {
    addRedact(state, action) {
      state.isRedact = true;
      state.text = action.payload.text;
      state.id = action.payload.id;
    },
    removeRedact(state) {
      state.isRedact = false;
      state.text = '';
      state.id = '';
    },
  },
});

export const { addRedact, removeRedact } = redactSlice.actions;

export default redactSlice.reducer;
