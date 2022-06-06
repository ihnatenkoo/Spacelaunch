import { SingleRocketData } from '../../../Interfaces';
import { ActionTypes, SingleRocketActions } from '../types';

const initialState = {
  name: '',
  description: '',
  image: '',
  firstFlight: '',
  nameCompany: '',
  abbrevCompany: '',
  type: '',
  country_code: '',
  family: '',
  fullName: '',
  variant: '',
  alias: '',
  min_stage: '',
  max_stage: '',
  length: '',
  diameter: '',
  launch_mass: '',
  to_thrust: '',
  apogee: '',
  leo_capacity: '',
  vehicle_range: '',
  total_launch_count: '',
  successful_launches: '',
  failed_launches: ''
};

export const singleRocketReducer = (
  state: SingleRocketData = initialState,
  action: SingleRocketActions
) => {
  switch (action.type) {
    case ActionTypes.SET_SINGLE_ROCKET_DATA:
      return {
        ...action.payload
      };

    default:
      return state;
  }
};
