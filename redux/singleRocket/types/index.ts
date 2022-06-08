import { SingleRocketData } from '../../../Interfaces';

export interface SingleRocketActions {
  type: ActionTypes.SET_SINGLE_ROCKET_DATA;
  payload: SingleRocketData;
}

export enum ActionTypes {
  SET_SINGLE_ROCKET_DATA = 'singleRocket/SET_DATA'
}
