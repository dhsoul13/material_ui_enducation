import { configureStore } from '@reduxjs/toolkit';
import dataslice from './slice/dataslice';
import isAuthSlice from './slice/isAuthSlice';
import searchslice from './slice/searchslice';
import errorSlice from './slice/showError';
import redactSlice from './slice/redactslice';
import showAllAction from './slice/showAllAction';
import showGraph from './slice/graphslice';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    search: searchslice,
    data: dataslice,
    error: errorSlice,
    auth: isAuthSlice,
    redact: redactSlice,
    showAllAction: showAllAction,
    showGraph: showGraph,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
