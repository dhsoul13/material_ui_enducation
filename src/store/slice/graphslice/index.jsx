import { createSlice } from '@reduxjs/toolkit';

const showGraph = createSlice({
  name: 'graph',
  initialState: {
    isShowGraph: false,
    data: '',
  },

  reducers: {
    addShowGraph(state, action) {
      state.isShowGraph = true;
      state.data = action.payload;
    },
    removeShowGraph(state) {
      state.isShowGraph = false;
      state.data = [];
    },
  },
});

export const { addShowGraph, removeShowGraph } = showGraph.actions;

export default showGraph.reducer;
