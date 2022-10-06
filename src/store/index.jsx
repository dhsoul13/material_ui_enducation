import { configureStore } from '@reduxjs/toolkit';
import searchslice from './slice/searchslice';

export const store = configureStore({
  reducer: {
    search: searchslice,
  },
});
