import { SingleEventData } from '../../../Interfaces';
import { ActionTypes, SingleEventActions } from '../types';

const initialState = {
  id: '',
  name: '',
  feature_image: '',
  description: '',
  date: '',
  video_url: ''
};

export const singleEventReducer = (
  state: SingleEventData = initialState,
  action: SingleEventActions
) => {
  switch (action.type) {
    case ActionTypes.SET_SINGLE_EVENT_DATA:
      return {
        ...action.payload
      };

    default:
      return state;
  }
};
