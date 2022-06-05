import { LaunchesData } from '../../../Interfaces';
import { ActionTypes } from '../types/';

export const setLaunchesDataStatic = (launchesData: Array<LaunchesData>) => {
  return {
    type: ActionTypes.SET_LAUNCHES_DATA_STATIC,
    payload: launchesData
  };
};

export const fetchLaunchesData = (launchesData: Array<LaunchesData>) => {
  return {
    type: ActionTypes.FETCH_LAUNCHES_DATA,
    payload: launchesData
  };
};

export const setOffset = (value: number) => {
  return {
    type: ActionTypes.SET_OFFSET,
    payload: value
  };
};

export const setLoading = (status: boolean) => {
  return {
    type: ActionTypes.SET_LOADING,
    payload: status
  };
};

export const setLoadingTrigger = (status: boolean) => {
  return {
    type: ActionTypes.SET_LOADING_TRIGGER,
    payload: status
  };
};

export const setError = (status: boolean) => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: status
  };
};

export const setEnd = () => {
  return {
    type: ActionTypes.SET_END
  };
};
