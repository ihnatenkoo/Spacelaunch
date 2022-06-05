import { LaunchesData } from '../../../Interfaces';

export interface InitialStateProps {
  launches: LaunchesState;
}

export interface LaunchesState {
  launchesData: Array<LaunchesData>;
  offset: number;
  loadingTrigger: boolean;
  isLoading: boolean;
  isError: boolean;
  isEnd: boolean;
}

export type LaunchesActionProps =
  | LaunchesFetchActions
  | LaunchesStatusActions
  | LaunchesOffsetAction;

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
interface LaunchesOffsetAction {
  type?: ActionTypes.SET_OFFSET;
  payload: number;
}

export enum ActionTypes {
  SET_LAUNCHES_DATA_STATIC = 'launchesData/SET_DATA_STATIC',
  FETCH_LAUNCHES_DATA_SUCCESS = 'launchesData/FETCH_SUCCESS',
  SET_OFFSET = 'launchesData/SET_OFFSET',
  SET_LOADING = 'launchesData/SET_LOADING',
  SET_LOADING_TRIGGER = 'launchesData/SET_LOADING_TRIGGER',
  SET_ERROR = 'launchesData/SET_ERROR',
  SET_END = 'launchesData/SET_END'
}
