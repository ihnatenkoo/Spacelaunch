import { SingleRocketData } from '../../../Interfaces';
import { ActionTypes } from '../types';

export const setRocketData = (rocketData: SingleRocketData) => {
  return {
    type: ActionTypes.SET_SINGLE_ROCKET_DATA,
    payload: rocketData
  };
};
