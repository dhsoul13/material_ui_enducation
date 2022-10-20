import { createSlice } from '@reduxjs/toolkit';

const showGraph = createSlice({
  name: 'graph',
  initialState: {
    isShowGraph: false,
    date: '',
  },

  reducers: {
    addShowGraph(state, action) {
      state.isShowGraph = true;
      state.date = action.payload;
    },
    removeShowGraph(state) {
      state.isShowGraph = false;
      state.date = [];
    },
  },
});

export const { addShowGraph, removeShowGraph } = showGraph.actions;

export default showGraph.reducer;
