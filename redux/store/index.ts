import { combineReducers, configureStore } from '@reduxjs/toolkit';

import launches from '../launches/launches.slice';
import recentEvents from '../recentEvents/recentEvents.slice';
import { singleEventReducer } from '../singleEvent/reducers';
import { singleLaunchReducer } from '../singleLaunch/reducers';
import { singleRocketReducer } from '../singleRocket/reducers';

const reducers = combineReducers({
	launches,
	recentEvents,
	singleLaunch: singleLaunchReducer,
	singleRocket: singleRocketReducer,
	singleEvent: singleEventReducer,
});

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
