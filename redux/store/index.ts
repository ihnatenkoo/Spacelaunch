import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { launchesReducer } from '../launches/reducers/';

const reducers = combineReducers({ launches: launchesReducer });

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production'
});
