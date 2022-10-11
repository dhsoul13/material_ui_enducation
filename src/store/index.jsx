import { configureStore } from '@reduxjs/toolkit';
import dataslice from './slice/dataslice';
import searchslice from './slice/searchslice';
import errorSlice from './slice/showError';

export const store = configureStore({
  reducer: {
    search: searchslice,
    data: dataslice,
    error: errorSlice,
  },
});
