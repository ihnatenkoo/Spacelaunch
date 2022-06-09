import { SingleEventData } from '../../../Interfaces';

export interface SingleEventActions {
  type: ActionTypes.SET_SINGLE_EVENT_DATA;
  payload: SingleEventData;
}

export enum ActionTypes {
  SET_SINGLE_EVENT_DATA = 'singleEvent/SET_DATA'
}
