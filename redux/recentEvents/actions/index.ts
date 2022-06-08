import { EventsData } from '../../../Interfaces';
import { ActionTypes } from '../types';

export const setRecentEventsData = (eventsData: Array<EventsData>) => {
  return {
    type: ActionTypes.SET_RECENT_EVENTS_DATA,
    payload: eventsData
  };
};
