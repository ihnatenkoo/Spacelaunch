import { EventsData } from '../../../Interfaces';

export interface RecentEventsState {
  recentEventsData: Array<EventsData>;
}

export interface RecentEventsActions {
  type: ActionTypes.SET_RECENT_EVENTS_DATA;
  payload: Array<EventsData>;
}

export enum ActionTypes {
  SET_RECENT_EVENTS_DATA = 'recentEvents/SET_DATA'
}
