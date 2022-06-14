import { ActionTypes, LaunchesActionProps, LaunchesState } from '../types';

const initialState = {
  launchesData: [],
  loadingTrigger: false,
  isLoading: false,
  isError: false,
  isEnd: false
};

export const launchesReducer = (
  state: LaunchesState = initialState,
  action: LaunchesActionProps
) => {
  switch (action.type) {
    case ActionTypes.SET_LAUNCHES_DATA_STATIC:
      return {
        ...state,
        launchesData: action.payload
      };

    case ActionTypes.FETCH_LAUNCHES_DATA_SUCCESS:
      return {
        ...state,
        launchesData: [...state.launchesData, ...action.payload]
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case ActionTypes.SET_LOADING_TRIGGER:
      return {
        ...state,
        loadingTrigger: action.payload
      };

    case ActionTypes.SET_ERROR:
      return {
        ...state,
        isError: action.payload
      };

    case ActionTypes.SET_END:
      return {
        ...state,
        isEnd: true
      };

    default:
      return state;
  }
};
