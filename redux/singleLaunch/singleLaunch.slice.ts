import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SingleLaunchData } from '../../Interfaces';

interface IState {
	launchInfo: SingleLaunchData;
}

const initialState: IState = {
	launchInfo: {
		id: '',
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
		eventCoordinates: { lat: 0, lng: 0 },
		rocketId: '',
		date: '',
		vidURLs: '',
	},
};

const singleLaunchSlice = createSlice({
	name: 'singleLaunch',
	initialState,
	reducers: {
		SET_SINGLE_LAUNCH: (state, action: PayloadAction<SingleLaunchData>) => {
			state.launchInfo = action.payload;
		},
	},
});

const { reducer, actions } = singleLaunchSlice;
export default reducer;
export const { SET_SINGLE_LAUNCH } = actions;
