import { configureStore } from '@reduxjs/toolkit';
import { launchesReducer } from '../reducers';

export const store = configureStore({
  reducer: launchesReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
