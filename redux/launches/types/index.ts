import { LaunchesData } from '../../../Interfaces';
export interface LaunchesState {
  launchesData: Array<LaunchesData>;
  loadingTrigger: boolean;
  isLoading: boolean;
  isError: boolean;
  isEnd: boolean;
}

export type LaunchesActionProps = LaunchesFetchActions | LaunchesStatusActions;

interface LaunchesFetchActions {
  type?: ActionTypes.SET_LAUNCHES_DATA_STATIC | ActionTypes.FETCH_LAUNCHES_DATA_SUCCESS;
  payload: Array<LaunchesData>;
}
interface LaunchesStatusActions {
  type?:
    | ActionTypes.SET_LOADING
    | ActionTypes.SET_LOADING_TRIGGER
    | ActionTypes.SET_ERROR
    | ActionTypes.SET_END;
  payload: boolean;
}

export enum ActionTypes {
  SET_LAUNCHES_DATA_STATIC = 'launches/SET_DATA_STATIC',
  FETCH_LAUNCHES_DATA_SUCCESS = 'launches/FETCH_SUCCESS',
  SET_LOADING = 'launches/SET_LOADING',
  SET_LOADING_TRIGGER = 'launches/SET_LOADING_TRIGGER',
  SET_ERROR = 'launches/SET_ERROR',
  SET_END = 'launches/SET_END'
}
