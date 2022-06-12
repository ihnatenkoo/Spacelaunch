import { SingleEventData } from '../../../Interfaces';
import { ActionTypes, SingleEventActions } from '../types';

const initialState = {
  id: '',
  name: '',
  feature_image: '',
  mainDescr: '',
  date: '',
  video_url: '',
  news_url: '',
  rocketName: '',
  mission_type: '',
  location: '',
  eventImg: '',
  missionDescr: '',
  orbit: ''
};

export const singleEventReducer = (
  state: SingleEventData = initialState,
  action: SingleEventActions
) => {
  switch (action.type) {
    case ActionTypes.SET_SINGLE_EVENT_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
