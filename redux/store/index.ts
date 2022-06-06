import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { launchesReducer } from '../launches/reducers/';
import { singleLaunchReducer } from '../singleLaunch/reducers';

const reducers = combineReducers({ launches: launchesReducer, singleLaunch: singleLaunchReducer });

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production'
});
