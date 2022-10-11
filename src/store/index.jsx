import { configureStore } from '@reduxjs/toolkit';
import dataslice from './slice/dataslice';
import isAuthSlice from './slice/isAuthSlice';
import searchslice from './slice/searchslice';
import errorSlice from './slice/showError';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    search: searchslice,
    data: dataslice,
    error: errorSlice,
    auth: isAuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
