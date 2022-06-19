import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { EventsData } from '../../../Interfaces';
import { transRecentEventsData } from '../../../utils';
import { ActionTypes } from '../types';

export const clientFetchSlides = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get(
        `https://spacelaunchnow.me/api/3.3.0/event/upcoming/?limit=15&offset=0`
      );
      const eventsData = transRecentEventsData(data.results);
      dispatch(setRecentEventsData(eventsData));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setRecentEventsData = (eventsData: Array<EventsData>) => {
  return {
    type: ActionTypes.SET_RECENT_EVENTS_DATA,
    payload: eventsData
  };
};
