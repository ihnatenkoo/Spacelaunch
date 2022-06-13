import { SingleLaunchData } from '../../../Interfaces';
import { ActionTypes, LaunchDataAction } from '../types';

const initialState = {
  name: '',
  image: '',
  type: '',
  orbit: '',
  location: '',
  launchComplex: '',
  rocketName: '',
  missionDescr: '',
  rocketFamily: '',
  rocketVariant: '',
  rocketDescr: '',
  rocketLink: '',
  rocketWiki: '',
  eventCoordinates: { lat: 0, lng: 0 },
  rocketId: '',
  date: '',
  vidURLs: ''
};

export const singleLaunchReducer = (
  state: SingleLaunchData = initialState,
  action: LaunchDataAction
) => {
  switch (action.type) {
    case ActionTypes.SET_SINGLE_LAUNCH_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
