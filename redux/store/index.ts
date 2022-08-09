import { combineReducers, configureStore } from '@reduxjs/toolkit';

import launches from '../launches/launches.slice';
import { recentEventsReducer } from '../recentEvents/reducers';
import { singleEventReducer } from '../singleEvent/reducers';
import { singleLaunchReducer } from '../singleLaunch/reducers';
import { singleRocketReducer } from '../singleRocket/reducers';

const reducers = combineReducers({
	launches,
	singleLaunch: singleLaunchReducer,
	singleRocket: singleRocketReducer,
	singleEvent: singleEventReducer,
	recentEvents: recentEventsReducer,
});

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
