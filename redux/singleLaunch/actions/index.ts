import { SingleLaunchData } from '../../../Interfaces';
import { ActionTypes } from '../types';

export const setLaunchData = (launchData: SingleLaunchData) => {
  return {
    type: ActionTypes.SET_SINGLE_LAUNCH_DATA,
    payload: launchData
  };
};
