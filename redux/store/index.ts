import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { launchesReducer } from '../launches/reducers/';
import { recentEventsReducer } from '../recentEvents/reducers';
import { singleLaunchReducer } from '../singleLaunch/reducers';
import { singleRocketReducer } from '../singleRocket/reducers';

const reducers = combineReducers({
  launches: launchesReducer,
  singleLaunch: singleLaunchReducer,
  singleRocket: singleRocketReducer,
  recentEvents: recentEventsReducer
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production'
});
