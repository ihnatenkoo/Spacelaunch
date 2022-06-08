import { SingleLaunchData } from '../../../Interfaces';

export interface LaunchDataAction {
  type: ActionTypes.SET_SINGLE_LAUNCH_DATA;
  payload: SingleLaunchData;
}

export enum ActionTypes {
  SET_SINGLE_LAUNCH_DATA = 'singleLaunch/SET_DATA'
}
