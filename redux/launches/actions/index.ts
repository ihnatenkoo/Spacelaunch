import { Dispatch } from 'redux';
import axios from 'axios';
import { ActionTypes } from '../types/';
import { LaunchesData, LaunchesRequestData } from '../../../Interfaces';

export const fetchLaunchesData = (offset: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.get(
        `https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed&limit=6&offset=${offset}`
      );

      const launchesData = data.results.map((item: LaunchesRequestData) => {
        const { id, name, net: date } = item;
        const { image_url: image } = item.rocket.configuration;

        return {
          name,
          image,
          id,
          date
        };
      });
      console.log(launchesData.length);
      if (launchesData.length < 6) dispatch(setEnd());
      dispatch(fetchLaunchesDataSuccess(launchesData));
      dispatch(setOffset(6));
      dispatch(setError(false));
    } catch (error) {
      console.error(error);
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
      dispatch(setLoadingTrigger(false));
    }
  };
};

export const fetchLaunchesDataSuccess = (launchesData: Array<LaunchesData>) => {
  return {
    type: ActionTypes.FETCH_LAUNCHES_DATA_SUCCESS,
    payload: launchesData
  };
};

export const setLaunchesDataStatic = (launchesData: Array<LaunchesData>) => {
  return {
    type: ActionTypes.SET_LAUNCHES_DATA_STATIC,
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
