import { EventsData } from '../../../Interfaces';

export interface RecentEventsState {
	recentEventsData: Array<EventsData>;
	isLoading: boolean;
	isError: boolean;
}

export enum ActionTypes {
	SET_RECENT_EVENTS_DATA = 'SET_RECENT_EVENTS_DATA',
}
