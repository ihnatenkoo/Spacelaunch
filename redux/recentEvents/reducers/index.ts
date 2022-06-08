import { ActionTypes, RecentEventsActions, RecentEventsState } from '../types';

const initialState = {
  recentEventsData: []
};

export const recentEventsReducer = (
  state: RecentEventsState = initialState,
  action: RecentEventsActions
) => {
  switch (action.type) {
    case ActionTypes.SET_RECENT_EVENTS_DATA:
      return {
        ...state,
        recentEventsData: action.payload
      };

    default:
      return state;
  }
};
