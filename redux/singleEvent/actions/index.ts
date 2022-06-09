import { SingleEventData } from '../../../Interfaces';
import { ActionTypes } from '../types';

export const setEventData = (eventData: SingleEventData) => {
  return {
    type: ActionTypes.SET_SINGLE_EVENT_DATA,
    payload: eventData
  };
};
