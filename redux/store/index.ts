import { combineReducers, configureStore } from '@reduxjs/toolkit';

import launches from '../launches/launches.slice';
import recentEvents from '../recentEvents/recentEvents.slice';
import singleEvent from '../singleEvent/singleEvent.slice';
import singleLaunch from '../singleLaunch/singleLaunch.slice';
import { singleRocketReducer } from '../singleRocket/reducers';

const reducers = combineReducers({
	launches,
	recentEvents,
	singleLaunch,
	singleRocket: singleRocketReducer,
	singleEvent,
});

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
