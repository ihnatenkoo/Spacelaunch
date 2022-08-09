import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { LaunchesState } from '../redux/launches/types/';
import { RecentEventsState } from '../redux/recentEvents/types';

import {
	SingleEventData,
	SingleLaunchData,
	SingleRocketData,
} from '../Interfaces';

export interface InitialStateProps {
	launches: LaunchesState;
	singleLaunch: SingleLaunchData;
	singleRocket: SingleRocketData;
	recentEvents: RecentEventsState;
	singleEvent: SingleEventData;
}

export const useAppSelector: TypedUseSelectorHook<InitialStateProps> =
	useSelector;
