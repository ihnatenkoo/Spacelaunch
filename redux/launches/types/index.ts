import { LaunchesData } from '../../../Interfaces';

export interface LaunchesState {
	launchesData: Array<LaunchesData>;
	loadingTrigger: boolean;
	isLoading: boolean;
	isError: boolean;
	isEnd: boolean;
}

export enum ActionTypes {
	SET_LAUNCHES_STATIC = 'SET_LAUNCHES_STATIC',
	SET_LOADING_TRIGGER = 'SET_LOADING_TRIGGER',
}
