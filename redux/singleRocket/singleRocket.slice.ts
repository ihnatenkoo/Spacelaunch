import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SingleRocketData } from '../../Interfaces';

interface IState {
	rocketInfo: SingleRocketData;
}

const initialState: IState = {
	rocketInfo: {
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
		failed_launches: '',
	},
};

const singleRocketSlice = createSlice({
	name: 'singleRocket',
	initialState,
	reducers: {
		SET_SINGLE_ROCKET: (state, action: PayloadAction<SingleRocketData>) => {
			state.rocketInfo = action.payload;
		},
	},
});

const { reducer, actions } = singleRocketSlice;
export default reducer;
export const { SET_SINGLE_ROCKET } = actions;
