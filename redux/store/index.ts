import { configureStore } from '@reduxjs/toolkit';

import launches from '../launches/launches.slice';
import recentEvents from '../recentEvents/recentEvents.slice';
import singleEvent from '../singleEvent/singleEvent.slice';
import singleLaunch from '../singleLaunch/singleLaunch.slice';
import singleRocket from '../singleRocket/singleRocket.slice';

export const store = configureStore({
	reducer: { launches, recentEvents, singleLaunch, singleRocket, singleEvent },
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
